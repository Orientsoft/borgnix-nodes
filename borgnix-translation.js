var fs = require('fs')
  , walk = require('walk')
  , path = require('path')
  , jquery = require('jquery')

  , jsdom = require('jsdom')
  , toMarkdown = require('to-markdown')
  , toHTML = require('markdown').markdown.toHTML

  , cmd = process.argv[2]

switch (cmd) {
  case 'extract':
    console.log('[CMD] EXTRACT')
    extract(process.argv[3], process.argv[4])
    break
  case 'update':
    console.log('[CMD] UPDATE')
    update(process.argv[3], process.argv[4])
    break
  default:
    console.log('command unknown')
    break
}

function extract (dir, language) {
  var dir = (dir? dir: '../../nodes')
    , options = {}
    , walker = walk.walk(dir, options)
    , language = (language? language: 'en')

  walker.on('file', function (root, fileStats, next) {
    if (path.extname(fileStats.name) == '.html') {
      var html = fs.readFileSync(root+'\\'+fileStats.name).toString()
        , doc = jsdom.jsdom(html)
        , window = doc.defaultView
        , outDir = 'data\\'+language

      if (!fs.existsSync(outDir))
        fs.mkdir(outDir)

      var $ = jquery(window)

      // extract nodes info
      $("script[data-help-name]").each(function () {
        var markdown = toMarkdown($(this).html())
          , suffix = '-' 
                   + $(this).attr('data-help-name').replace(' ', '-')
                   + '-help.md'
          , markdownFn = (outDir + '\\' + fileStats.name).replace( '.html'
                                                                 , suffix)
        fs.writeFile(markdownFn, markdown, function (err) {
          if (err) 
            console.log(err.stack)
          else 
            console.log('[OUTPUT]', markdownFn)
        })
        
      })

      // extract tips
      $('script[data-template-name]').each(function () {
        var insideHtml = $(this).html()
          , templateName = $(this).attr('data-template-name')

        // replace and fix the script tags,
        // so they don't get parsed and excluded
        if (insideHtml.search('<script>')!=-1) {
          console.log('I HATE SCRIPT TAGS')
          insideHtml = insideHtml + '</script>'
          insideHtml = insideHtml.replace( /<script>/
                                         , '<script type="text/replace">')
        }
        insideHtml = '<div>'+insideHtml+'</div>'

        $tempDoc = $(insideHtml)
        
        // for every tip, convert it to markdown, and store them as file
        $('div.form-tips', $tempDoc).each(function () {
          suffix = '-' 
                 + templateName.replace(' ', '-')
                 + ( $(this).attr('id')
                   ? ('-' + $(this).attr('id'))
                   : '')
                 + '-tips.md'
          markdownFn = (outDir + '\\' + fileStats.name).replace('.html'
                                                             , suffix)
          markdown = toMarkdown($(this).html())
          fs.writeFile(markdownFn, markdown, function (err) {
            if (err)
              console.log(err.stack)
            else 
              console.log('[OUTPUT]', markdownFn)
          })
        })
      })
    }
    next()
  })
}

function update (language, dir) {
  var dir = (dir? dir: '../../nodes')
    , options = {}
    , walker = walk.walk(dir, options)
    , language = (language? language: 'en')

  console.log(dir, language)

  walker.on('file', function (root, fileStats, next) {
    if (path.extname(fileStats.name) == '.html') {
      var html = fs.readFileSync(root+'\\'+fileStats.name).toString()
        , doc = jsdom.jsdom(html)
        , window = doc.defaultView
        , outDir = 'data\\'+language

      if (!fs.existsSync(outDir)) {
        console.log('[ERROR]', outDir, 'does not exist')
        console.log('[ERROR] UPDATE FAILED')
      }

      var $ = jquery(window)
      
      // update info
      $('script[data-help-name]').each(function () {
        suffix = '-' 
               + $(this).attr('data-help-name').replace(' ', '-')
               + '-help.md'
        markdownFn = (outDir + '\\' + fileStats.name).replace( '.html'
                                                             , suffix)
        if (fs.existsSync(markdownFn)) {
          console.log('[INFO] File exists:', markdownFn)
          markdown = fs.readFileSync(markdownFn).toString()
         $(this).html(toHTML(markdown))
        }
        else {
          console.log("[ERROR] File doesn't exist:" ,markdownFn)
        }
      })

      // update tips
      $('script[data-template-name]').each(function () {
        var insideHtml = $(this).html()
          , templateName = $(this).attr('data-template-name')
          , suffix = '-' 
                   + templateName.replace(' ', '-')
                   + ( $(this).attr('id')
                     ? ('-' + $(this).attr('id'))
                     : '')
                   + '-tips.md'
          , markdownFn = (outDir + '\\' + fileStats.name).replace('.html'
                                                                 , suffix)
        // replace and fix the script tags,
        // so they don't get parsed and excluded
        if (insideHtml.search('<script>')!=-1) {
          console.log('I HATE SCRIPT TAGS!')
          insideHtml = insideHtml + '</script>'
          insideHtml = insideHtml.replace( /<script>/
                                         , '<script type="text/replace">')
        }
        insideHtml = '<div>'+insideHtml+'</div>'

        $tempDoc = $(insideHtml)

        if (fs.existsSync(markdownFn)) {
          console.log('[INFO] File exists:', markdownFn)
          markdown = fs.readFileSync(markdownFn).toString()
          $('div.form-tips', $tempDoc).html(toHTML(markdown))
        }
        
        tempHtml = $tempDoc.html()
        
        $(this).html(tempHtml)
      })

      finalHtml = $('head').html()
      finalHtml = finalHtml.replace( /<script type="text\/replace">/
                                   , '<script>')

      fs.writeFileSync(root+'\\'+fileStats.name, finalHtml)
    }
    next()
  })
}


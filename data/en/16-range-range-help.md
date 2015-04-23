A simple function node to remap numeric input values to another scale.

Currently only does a linear scaling.

**Note:** This only operates on **numbers**. Anything else will try to be made into a number and rejected if that fails.

_Scale and limit to target range_ means that the result will never be outside the range specified within the result range.

_Scale and wrap within the target range_ means that the result will essentially be a "modulo-style" wrap-around within the result range.
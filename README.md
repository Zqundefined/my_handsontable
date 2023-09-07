## class style
自定义 id、class、style 和其他属性可以传递到 hot-table 包装元素中。它们中的每一个都将应用于根 Handsontable 元素，从而允许进一步自定义表格。
<!-- <hot-table :id="id" :class="className" :style="style" :settings="hotSettings"></hot-table> -->

## VUE3 API 记录
// 获取当前组件实例

getCurrentInstance()


# hook 钩子函数

# 添加子项后
## 将子级添加到 NestedRows 结构后由 NestedRows 插件触发 当启用Options#nestedRows选项时会触发此钩子
    afterAddChild(parent,element,index)
    parent : Obj  父级对象
    element ： Obj｜undefined  作为子元素添加到元素。如果undefined，则添加一个空子项
    index : Num|undefined 添加新子项中的索引，如果undefined 则添加到最有一个元素

# 自动填充后
## 在自动填充功能中填充数据后由自动填充插件触发。当启用Options#fillHandle选项时会触发此钩子。
    afterAutofill(fillData, sourceRange, targetRange, direction)
    fillData : Array  用于填充到数据 targetRange. 如果beforeAutofill使用并返回[[]] 这将与从返回到对象相同beforeAutofill
    sourceRange : CellRange 范围值将被填充 (源范围)
    targetRange ： CellRange 将填充新值的范围 (目标范围)
    direction ： Str 声明自动填充的方向  可选值 up,down,left,right

# 开始编辑后
## 打开并渲染编辑器后触发
    afterBeginEditing(row, column)
    row ： Num 已编辑单元格的可视行索引
    column : Num 已编辑单元格的可视列索引

# 单元格重置后
## 重置单元元后触发。当调用Core#updateSettings方法时会发生这种情况。
    afterCellMetaReset

# 更改后
## 在更改一个或多个单元格后触发。当使用编辑器输入值或使用 API（eq setDataAtCell）更改值时，在任何情况下都会触发更改
    afterChange(changes, [source])
    changes : Array 包含有关每个已编辑单元格的信息的二维数组[[row, prop, oldVal, newVal], ...]。row是视觉行索引。
    sourcel : optional标识钩子调用源的字符串
    ```
    new Handsontable(element, {
        afterChange: (changes) => {
            changes?.forEach(([row, prop, oldValue, newValue]) => {
            // Some logic...
            });
        }
    })
    ```
    

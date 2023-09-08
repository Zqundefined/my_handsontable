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
    
#  列折叠后
## 在列折叠之前由CollapsibleColumns插件触发。当启用Options#collapsibleColumns选项时会触发此钩子。
    afterColumnCollapse（currentCollapsedColumns，destinationCollapsedColumns，collapsePossible，successfullyCollapsed）
    currentCollapsedColumns ： Array 当前可折叠配置 - 可折叠物理列索引的列表。
    destinationCollapsedColumns : Array 目标可折叠配置 - 可折叠物理列索引的列表
    collapsePossible : Boolean  true，如果所有列索引都在折叠部分的范围内，false否则
    successfullyCollapsed : Boolean true，如果该操作影响任何不可折叠的列，false否则

# 列展开后
## 在列展开之前由CollapsibleColumns插件触发。当启用Options#collapsibleColumns选项时会触发此钩子。
    afterColumnExpand(currentCollapsedColumns、destinationCollapsedColumns、expandPossible、successfullyCollapsed)
    currentCollapsedColumns ： Array 当前这点配置-可配置物理列索引的列表
    destinationCollapsedColumns : Array 目标可展开配置 - 可折叠物理列索引的列表
    expandPossible : Boolean  true，如果所有列索引都在展开部分的范围内，false否则
    successfullyCollapsed : Boolean true，如果该操作影响任何不可展开的列，false否则

# 列冻结后
## 在冻结列后立即由ManualColumnFreeze插件触发。
    afterColumnFreeze(column, freezePerformed)
    column : number 冻结列
    freezePerformed ： boolean 如果true：柱已成功冻结。如果false：色谱柱没有冻结。
# 列解冻后
## 在解冻列后立即由ManualColumnFreeze插件触发。
    afterColumnUnfreeze(column, unfreezePerformed)
    column ： Num 来冻结列的视觉索引
    unfreezePerformed ： boolean true：列已成功解冻，false：未解冻

# 列移动后
## 更改视觉索引的顺序后由ManualColumnMove插件触发。当启用Options#manualColumnMove选项时会触发此钩子。
    afterColumnMove(movedColumns, FinalIndex, dropIndex, movePossible, orderChanged)
    movedColumns ： Array 要移动的可视列索引数组
    FinalIndex : Num 可视列索引，是移动列的其实索引。指向移动操作后元素将放置的位置。要检查最终索引的可视化
    dropIndex ： Num｜undefined 可视列索引，是移动列的删除索引。指向我们要放置移动元素的位置。要检查掉落索引的可视化，请查看 文档。这是undefined当dragColumns函数没有被调用时
    movePossible ： boolean 指示是否可以将列移动到所需位置
    orderChanged ： boolean 指示列的循序是否因移动而改变

# 调整大小后
## 在使用修改的列大小渲染表格后由ManualColumnResize插件触发。当启用Options#manualColumnResize选项时会触发此钩子
    afterColumnResize(newSize, column, isDoubleClick)
    newSize ： Num 新的列宽
    column ： Num 调整大小后的列的索引
    isDoubleClick ： boolean 确认是否有双击的标志

# 列循序更改后
## 列的顺序更改后触发。通过更改IndexMapper支持的任何类型的列索引来触发此挂钩
    afterColumnSequenceChange([source])
    source ： optional一个字符串，指示导致列顺序更改的原因

# 列排序后
## 对列进行排序后由ColumnSorting和MultiColumnSorting插件触发。当启用Options#columnSorting 或Options#multiColumnSorting选项时会触发此钩子
    afterColumnSort(currentSortConfig, destinationSortConfigs)
    currentSortConfig ： Array 当前排序配置 (对于所有已排序的列)
    destinationSortConfigs ： Array 目标排序配置 (适用于所有已排序的列)


# ----
## 每次用户打开上下文菜单以及设置上下文菜单的默认选项后都会触发。这些选项是一个集合，用户可以通过在Options#contextMenu选项中设置键数组或对象数组来选择
    afterContextMenuDefaultOptions（predefinedItems）
    predefinedItems ： Array  包含有关预定义上下文菜单项的信息的对象数组

# 上下文菜单隐藏后
# 隐藏上下文菜单后由ContextMenu插件触发。 当启用Options#contextMenu选项时会触发此钩子
    afterContextMenuHide(context)
    context : Obj 上下文菜单插件实例

# 上下文菜单显示后
## 打开上下文菜单后由ContextMenu插件触发。 当启用Options#contextMenu选项时会触发此钩子
    afterContextMenuShow(context)
    context : Obj 上下文菜单插件实例

# 复制后
## 数据粘贴到表后由CopyPaste插件触发。 当启用Options#copyPaste选项时会触发此钩子。
    afterCopy(data, coords, copiedHeadersCount)
    data : Array<Array> 包含复制数据的数组的数组
    coords : Array<Array> 具有已复制的视觉索引范围 ( startRow、startCol、endRow、 )的对象数组。endCol
    copiedHeadersCount : Obj （自 12.3.0 起）复制的列标题的数量。

# 复制限制后
## 复制数据时达到复制限制后由CopyPaste插件触发。当启用Options#copyPaste选项时会触发此钩子 
    afterCopyLimit(selectedRows, selectedColumns, copyRowsLimit, copyColumnsLimit)
    selectedRows ： Num 选定的可复制行的计数
    selectedColumns ： Num 选定的可复制的列的计数
    copyRowsLimit ： 当前复制行数限制
    copyColumnsLimit ： 当前复制列数限制

# 创建列后
## 创建新列后触发。
    afterCreateCol(index, amount, [source])
    index : NUm 表示数据源中第一个新创建的列的可视索引
    amount ： Num 数据源中新创建的列数。
    source ： optional标识钩子调用源的字符串（所有可用源的列表）。
# 创建行后
## 创建新行后触发。
    afterCreateRow(index, amount, [source])
    index : NUm 表示数据源中第一个新创建的行的可视索引
    amount ： Num 数据源中新创建的行数。
    source ： optional标识钩子调用源的字符串（所有可用源的列表）。

# 剪切
## 从表中剪切数据后由CopyPaste插件触发。当启用Options#copyPaste选项时会触发此钩子 。
    afterCut(data, coords)
    data ： Array<Array> 包含剪切数据的数组的数组。
    coords : Array<Array> 具有被剪切的视觉索引范围（ startRow、startCol、endRow、 ）的对象数组。endCol

# 取消选择后
## 取消选择所有选定的单元格后触发。
    afterDeselect

# 销毁后
## 销毁 Handsontable 实例后触发
    afterDestroy

# 分离子之后
## 将子级与其父级分离后由NestedRows插件触发。当启用Options#nestedRows选项时会触发此钩子 。
    afterDetachChild(parent, element, finalElementPosition)
    parent : Obj 父级对象
    element ： Obj 分离的元素
    finalElementPosition ： Num 分离元素的最终行索引。

# 按下文档键后
## 处理 keydown 事件后触发钩子。
    afterDocumentKeyDown(event)
    event : Event 本机keydown事件对象。

# 绘制选择后
## 在 Walkontable 的选择draw方法中触发。可用于向单元格添加其他类名称，具体取决于当前选择。
    afterDrawSelectionafterDrawSelection(currentRow, currentColumn, cornersOfSelection, layerLevel) ⇒ string | undefined
    currentRow : Num 当前处理的单元格的行索引。
    currentColumn : Num 当前单元格的列索引。
    cornersOfSelection : Array<number> 当前选择的数组，格式为[startRow, startColumn, endRow, endColumn]
    layerLevel : number|undefined 指示当前正在处理哪一层选择的数字
    返回：string| undefined- 可以返回 a String，它将作为附加项className添加到当前处理的单元格中。




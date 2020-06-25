<template>
    <div>
        <button :class='["web-button", "web-button--"+buttonType, {"is-plain": isPlain}]'>
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    name: "web-button",
    props: {
        buttonType: {
            type: String,
            default: "default"
        },
        isPlain: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .web-button{
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
    }
    .web-button--primary{
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
    }
    .web-button--success{
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
    }
    .web-button--info{
        color: #fff;
        background-color: #909399;
        border-color: #909399;
    }
    .web-button--warning{
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
    }
    .web-button--danger{
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
    }
    .web-button--primary.is-plain{
        color: #409eff;
        background: #ecf5ff;
        border-color: #b3d8ff;
    }
    .web-button--primary.is-plain:hover{
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
    }
    .web-button--success.is-plain{
        color: #67c23a;
        background: #f0f9eb;
        border-color: #c2e7b0;
    }
    .web-button--success.is-plain:hover{
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
    }
    .web-button--info.is-plain{
        color: #909399;
        background: #f4f4f5;
        border-color: #d3d4d6;
    }
    .web-button--info.is-plain:hover{
        color: #fff;
        background-color: #909399;
        border-color: #909399;
    }
    .web-button--warning.is-plain{
        color: #e6a23c;
        background: #fdf6ec;
        border-color: #f5dab1;
    }
    .web-button--warning.is-plain:hover{
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
    }
    .web-button--danger.is-plain{
        color: #f56c6c;
        background: #fef0f0;
        border-color: #fbc4c4;
    }
    .web-button--danger.is-plain:hover{
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
    }
</style>
<template>
  <div class="upload-image">
    <el-dialog :model-value="props.dialogVisible" title="图片上传" width="30%" :before-close="handleClose">
      <el-upload ref="upload" drag action="/api/upload/" :on-change="onChange">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['on-close', 'on-success'])
const props = defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
})

/**
 * @todo 后台接口
 * 上传 jpg ｜ png => webp
 * @return { Webp: 'xxx.webp', NoWebp: 'xxx.jpg or xxx.png' }
 */
const onChange = (file: any) => {
  if (file.percentage === 100) {
    emit('on-success', {
      Webp: 'xxx.webp',
      NoWebp: 'xxx.jpg or xxx.png',
    })
  }
}

const handleClose = () => {
  emit('on-close')
}
</script>

<script lang="ts">
export default {
  emits: ['on-close', 'on-success'],
}
</script>

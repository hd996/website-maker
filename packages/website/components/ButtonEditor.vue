<template>
  <div class="btn-editor">
    <el-form ref="formRef" :model="form">
      <el-form-item label="文案">
        <el-input v-model="form.btnText" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="链接">
        <el-input v-model="form.btnLink" size="mini"></el-input>
      </el-form-item>
      <el-form-item label="开启新标签页">
        <el-switch v-model="form.btnBlank" size="mini"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="mini" @click="onSave">保存</el-button>
        <el-button size="mini" @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
interface ButtonProps {
  btnText: string
  btnLink: string
  btnBlank: boolean
}

const emit = defineEmits(['on-save', 'on-cancel'])
const props = defineProps({
  btnText: {
    type: String,
    default: '',
  },

  btnLink: {
    type: String,
    default: '',
  },

  btnBlank: {
    type: Boolean,
    default: true,
  },
})

const form = reactive<ButtonProps>({
  btnText: props.btnText,
  btnLink: props.btnLink,
  btnBlank: props.btnBlank,
})

const onSave = () => {
  emit('on-save', form)
}

const onCancel = () => {
  emit('on-cancel')
}
</script>

<style scoped lang="scss">
.btn-editor {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #2e2e2f;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 10px 30px;
  color: #fff;
  min-width: 260px;
}
</style>

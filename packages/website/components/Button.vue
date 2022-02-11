<template>
  <div relative inline-flex @mouseover="isShow = true" @mouseleave="isShow = false">
    <a :class="classes" :href="props.link" :target="isBlank ? '_blank' : '_self'">
      {{ props.text }}
    </a>

    <template v-if="isCMS">
      <div
        v-show="isShow && !isShowEditor"
        absolute
        left-0
        top-0
        w-full
        h-full
        rounded-lg
        bg-yellow-400
        bg-opacity-50
        flex
        justify-center
        items-center
        cursor-pointer
        @click="isShowEditor = true"
      >
        <i class="inline-flex i-mdi-square-edit-outline" text-2xl text-black></i>
      </div>

      <ButtonEditor
        v-show="isShowEditor"
        :btn-text="text"
        :btn-link="link"
        :btn-blank="isBlank"
        @on-save="onSave"
        @on-cancel="isShowEditor = false"
      >
      </ButtonEditor>
    </template>
  </div>
</template>

<script setup lang="ts">
import { isCMS } from '../composables/useComponent'

const emit = defineEmits(['on-save'])
const props = defineProps({
  type: {
    type: String,
    values: ['default', 'primary', 'prue', 'tag', 'link', 'docs', 'deep'],
    default: 'default',
  },

  text: {
    type: String,
    default: '',
  },

  size: {
    type: String,
    values: ['sm', 'md', 'lg'],
    default: 'md',
  },

  link: {
    type: String,
    default: '',
  },

  isBlank: {
    type: Boolean,
    default: true,
  },
})

const isShow = ref<boolean>(false)
const isShowEditor = ref<boolean>(false)

const classes = computed(() => {
  return ['btn', 'inline-flex', 'items-center', `btn-${props.type}`, `btn-${props.size}`]
})

const onSave = (val: any) => {
  isShowEditor.value = false
  emit('on-save', val)
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 767.98px) {
  .btn {
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    position: relative;

    &.btn-default {
      color: $colorPrimary;
      box-shadow: 0px 8px 27px 0px rgba(181, 214, 235, 0.69);
      border: 1px solid $colorPrimary;

      &:hover,
      &:active {
        box-shadow: unset;
        border: 1px solid #0bb2ff;
      }
    }

    &.btn-primary {
      background: linear-gradient(135deg, #0991ff 0%, #0169ff 100%);
      color: #fff;

      &:hover {
        box-shadow: 0px 2px 15px 0px rgba(0, 12, 138, 0.3);
      }
    }

    &.btn-deep {
      box-shadow: 0px 8px 27px 0px rgba(181, 214, 235, 0.69);
      border: 1px solid #ffffff;
      color: #fff;

      &:hover,
      &:active {
        background-color: #fff;
        color: $colorPrimary;
      }
    }

    &.btn-prue {
      background-color: #fff;
      color: $colorPrimary;

      &:hover,
      &:active {
        box-shadow: 0px 4px 16px 0px rgba(7, 123, 255, 0.21);
      }
    }

    &.btn-tag {
      background-color: #ebf8ff;
      color: $colorPrimary;
      height: 26px !important;
      line-height: 26px !important;
      padding: 0 12px !important;
      font-size: 12px;
    }

    &.btn-link {
      color: $colorPrimary;
      height: auto !important;
      line-height: unset !important;

      &::after {
        display: none;
        position: absolute;
        content: '';
        left: 50%;
        top: 100%;
        transform: translateX(-50%);
        width: 100%;
        max-width: 80px;
        height: 10px;
        background-image: url('../assets/img/icon-wave.gif');
        background-size: 100%;
        background-repeat: no-repeat;
      }

      &:hover {
        &::after {
          display: block;
        }
      }
    }

    &.btn-docs {
      color: $colorPrimary;
      border: 1px solid $colorPrimary;

      &:hover,
      &:active {
        background: linear-gradient(135deg, #0082ff 0%, #015aff 100%);
        box-shadow: 0px 4px 12px 0px rgba(7, 123, 255, 0.4);
        color: #fff;
      }
    }

    &.btn-sm {
      padding: 0 26px;
      height: 40px;
      line-height: 40px;
    }

    &.btn-md {
      padding: 0 30px;
      height: 50px;
      line-height: 50px;
    }

    &.btn-lg {
      padding: 0 40px;
      height: 60px;
      line-height: 60px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1023.98px) {
  .btn {
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    position: relative;

    &.btn-default {
      color: $colorPrimary;
      box-shadow: 0px 8px 27px 0px rgba(181, 214, 235, 0.69);
      border: 1px solid $colorPrimary;

      &:hover,
      &:active {
        box-shadow: unset;
        border: 1px solid #0bb2ff;
      }
    }

    &.btn-primary {
      background: linear-gradient(135deg, #0991ff 0%, #0169ff 100%);
      color: #fff;

      &:hover {
        box-shadow: 0px 2px 15px 0px rgba(0, 12, 138, 0.3);
      }
    }

    &.btn-deep {
      box-shadow: 0px 8px 27px 0px rgba(181, 214, 235, 0.69);
      border: 1px solid #ffffff;
      color: #fff;

      &:hover,
      &:active {
        background-color: #fff;
        color: $colorPrimary;
      }
    }

    &.btn-prue {
      background-color: #fff;
      color: $colorPrimary;

      &:hover,
      &:active {
        box-shadow: 0px 4px 16px 0px rgba(7, 123, 255, 0.21);
      }
    }

    &.btn-tag {
      background-color: #ebf8ff;
      color: $colorPrimary;
      height: 26px !important;
      line-height: 26px !important;
      padding: 0 12px !important;
      font-size: 12px;
    }

    &.btn-link {
      color: $colorPrimary;
      height: auto !important;
      line-height: unset !important;

      &::after {
        display: none;
        position: absolute;
        content: '';
        left: 50%;
        top: 100%;
        transform: translateX(-50%);
        width: 100%;
        max-width: 80px;
        height: 10px;
        background-image: url('../assets/img/icon-wave.gif');
        background-size: 100%;
        background-repeat: no-repeat;
      }

      &:hover {
        &::after {
          display: block;
        }
      }
    }

    &.btn-docs {
      color: $colorPrimary;
      border: 1px solid $colorPrimary;

      &:hover,
      &:active {
        background: linear-gradient(135deg, #0082ff 0%, #015aff 100%);
        box-shadow: 0px 4px 12px 0px rgba(7, 123, 255, 0.4);
        color: #fff;
      }
    }

    &.btn-sm {
      padding: 0 26px;
      height: 40px;
      line-height: 40px;
    }

    &.btn-md {
      padding: 0 30px;
      height: 50px;
      line-height: 50px;
    }

    &.btn-lg {
      padding: 0 40px;
      height: 60px;
      line-height: 60px;
    }
  }
}

@media screen and (min-width: 1024px) and (max-width: 1279.98px) {
  .btn {
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    position: relative;

    &.btn-default {
      color: $colorPrimary;
      box-shadow: 0px 8px 27px 0px rgba(181, 214, 235, 0.69);
      border: 1px solid $colorPrimary;

      &:hover,
      &:active {
        box-shadow: unset;
        border: 1px solid #0bb2ff;
      }
    }

    &.btn-primary {
      background: linear-gradient(135deg, #0991ff 0%, #0169ff 100%);
      color: #fff;

      &:hover {
        box-shadow: 0px 2px 15px 0px rgba(0, 12, 138, 0.3);
      }
    }

    &.btn-deep {
      box-shadow: 0px 8px 27px 0px rgba(181, 214, 235, 0.69);
      border: 1px solid #ffffff;
      color: #fff;

      &:hover,
      &:active {
        background-color: #fff;
        color: $colorPrimary;
      }
    }

    &.btn-prue {
      background-color: #fff;
      color: $colorPrimary;

      &:hover,
      &:active {
        box-shadow: 0px 4px 16px 0px rgba(7, 123, 255, 0.21);
      }
    }

    &.btn-tag {
      background-color: #ebf8ff;
      color: $colorPrimary;
      height: 26px !important;
      line-height: 26px !important;
      padding: 0 12px !important;
      font-size: 12px;
    }

    &.btn-link {
      color: $colorPrimary;
      height: auto !important;
      line-height: unset !important;

      &::after {
        display: none;
        position: absolute;
        content: '';
        left: 50%;
        top: 100%;
        transform: translateX(-50%);
        width: 100%;
        max-width: 80px;
        height: 10px;
        background-image: url('../assets/img/icon-wave.gif');
        background-size: 100%;
        background-repeat: no-repeat;
      }

      &:hover {
        &::after {
          display: block;
        }
      }
    }

    &.btn-docs {
      color: $colorPrimary;
      border: 1px solid $colorPrimary;

      &:hover,
      &:active {
        background: linear-gradient(135deg, #0082ff 0%, #015aff 100%);
        box-shadow: 0px 4px 12px 0px rgba(7, 123, 255, 0.4);
        color: #fff;
      }
    }

    &.btn-sm {
      padding: 0 26px;
      height: 40px;
      line-height: 40px;
    }

    &.btn-md {
      padding: 0 30px;
      height: 50px;
      line-height: 50px;
    }

    &.btn-lg {
      padding: 0 40px;
      height: 60px;
      line-height: 60px;
    }
  }
}

@media screen and (min-width: 1280px) {
  .btn {
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    position: relative;

    &.btn-default {
      color: $colorPrimary;
      box-shadow: 0px 8px 27px 0px rgba(181, 214, 235, 0.69);
      border: 1px solid $colorPrimary;

      &:hover,
      &:active {
        box-shadow: unset;
        border: 1px solid #0bb2ff;
      }
    }

    &.btn-primary {
      background: linear-gradient(135deg, #0991ff 0%, #0169ff 100%);
      color: #fff;

      &:hover {
        box-shadow: 0px 2px 15px 0px rgba(0, 12, 138, 0.3);
      }
    }

    &.btn-deep {
      box-shadow: 0px 8px 27px 0px rgba(181, 214, 235, 0.69);
      border: 1px solid #ffffff;
      color: #fff;

      &:hover,
      &:active {
        background-color: #fff;
        color: $colorPrimary;
      }
    }

    &.btn-prue {
      background-color: #fff;
      color: $colorPrimary;

      &:hover,
      &:active {
        box-shadow: 0px 4px 16px 0px rgba(7, 123, 255, 0.21);
      }
    }

    &.btn-tag {
      background-color: #ebf8ff;
      color: $colorPrimary;
      height: 26px !important;
      line-height: 26px !important;
      padding: 0 12px !important;
      font-size: 12px;
    }

    &.btn-link {
      color: $colorPrimary;
      height: auto !important;
      line-height: unset !important;

      &::after {
        display: none;
        position: absolute;
        content: '';
        left: 50%;
        top: 100%;
        transform: translateX(-50%);
        width: 100%;
        max-width: 80px;
        height: 10px;
        background-image: url('../assets/img/icon-wave.gif');
        background-size: 100%;
        background-repeat: no-repeat;
      }

      &:hover {
        &::after {
          display: block;
        }
      }
    }

    &.btn-docs {
      color: $colorPrimary;
      border: 1px solid $colorPrimary;

      &:hover,
      &:active {
        background: linear-gradient(135deg, #0082ff 0%, #015aff 100%);
        box-shadow: 0px 4px 12px 0px rgba(7, 123, 255, 0.4);
        color: #fff;
      }
    }

    &.btn-sm {
      padding: 0 26px;
      height: 40px;
      line-height: 40px;
    }

    &.btn-md {
      padding: 0 30px;
      height: 50px;
      line-height: 50px;
    }

    &.btn-lg {
      padding: 0 40px;
      height: 60px;
      line-height: 60px;
    }
  }
}
</style>

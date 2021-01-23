<template>
  <div
    ref="paragraphRef"
    class="paragraph"
    @click.stop="toggleOpenState"
  >
    <h3 class="paragraph__title">
      {{ realIndex }}.{{ depth >= 1 ? `${index}.` : '' }} {{ paragraph.title }}
    </h3>
    <div
      ref="animatorRef"
      class="paragraph__list-animator"
    >
      <ul
        ref="listRef"
        class="paragraph__list"
        :style="{marginLeft: `${depthCoefficient * (depth + 1)}px`}"
      >
        <li
          v-for="(subparagraph, i) in paragraph.subparagraphs"
          :key="`subparagraph_${i}`"
          class="paragraph__subparagraph subparagraph"
        >
          <Paragraph
            v-if="isParagraph(subparagraph)"
            :depth="depth + 1"
            :paragraph="subparagraph"
            :parent-index="index"
            :index="i + 1"
            @add-height="addHeight"
            @remove-height="removeHeight"
          />
          <p
            v-else
            class="subparagraph__text"
          >
            <span class="subparagraph__index">{{ realIndex }}.{{ depth >= 1 ? `${index}.` : '' }}{{ i + 1 }}</span>
            <span
              class="subparagraph__content"
              v-html="subparagraph"
            />
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import paragraphNumeration from '@/composition/TermsOfUse/ParagraphNumeration'
import showParagraphLogic from '@/composition/TermsOfUse/ShowParagraphLogic'

export default {
  name: 'Paragraph',
  props: {
    index: {
      type: Number,
      require: true,
      default: -1
    },
    depth: {
      type: Number,
      require: false,
      default: 0
    },
    parentIndex: {
      type: Number,
      require: false,
      default: -1
    },
    paragraph: {
      type: Object,
      require: true,
      default: () => ({
        title: 'default title',
        subparagraphs: []
      })
    }
  },
  emits: ['add-height', 'remove-height'],
  setup (props, { emit }) {
    const { realIndex, isParagraph, depthCoefficient } = paragraphNumeration(props)
    const showLogic = showParagraphLogic(props, emit)

    return {
      realIndex,
      depthCoefficient,
      isParagraph,
      ...showLogic
    }
  }
}
</script>

<style lang="scss" scoped>
.paragraph {
  @include hover();

  &__list {
    min-width: 200px;
    margin: 0;
    padding: 0;
    list-style: none;

    &-animator {
      @include transition(height);
      overflow: hidden;
      height: 0px;
    }
  }

  &__title {
    margin: 0 0 10px 0;
  }

  .subparagraph {
    &__text {
      margin: 0 0 5px 0;
      font-size: 14px;
      line-height: 22px;
    }

    &__index {
      margin-right: 5px;
    }
  }}
</style>

<template>
    <div v-html="highlighted" class="code-block" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { createHighlighter } from 'shiki'

const props = defineProps({
    code: String,
    lang: { type: String, default: 'css' },
})

const THEME = {
    name: 'vscode-custom',
    type: 'dark',
    colors: {
        'editor.background': '#25221f',
        'editor.foreground': '#d4d4d4',
    },
    tokenColors: [
        {
            scope: ['source'],
            settings: { foreground: '#d4d4d4' }
        },
        {
            scope: ['comment', 'punctuation.definition.comment'],
            settings: { foreground: '#6a9955', fontStyle: 'italic' }
        },
        {
            scope: ['keyword', 'keyword.control', 'keyword.operator', 'storage.type'],
            settings: { foreground: '#c586c0' }
        },
        {
            scope: ['keyword.control.at-rule', 'punctuation.definition.keyword'],
            settings: { foreground: '#c586c0' }
        },
        {
            scope: [
                'support.type.property-name',
                'support.type.property-name.css',
                'meta.property-name'
            ],
            settings: { foreground: '#9cdcfe' }
        },
        {
            scope: ['variable.css', 'variable.other.custom-property'],
            settings: { foreground: '#9cdcfe' }
        },
        {
            scope: ['support.constant.property-value', 'meta.property-value'],
            settings: { foreground: '#ce9178' }
        },
        {
            scope: ['constant.numeric', 'keyword.other.unit'],
            settings: { foreground: '#b5cea8' }
        },
        {
            scope: ['string', 'string.quoted', 'string.unquoted'],
            settings: { foreground: '#ce9178' }
        },
        {
            scope: [
                'entity.other.attribute-name',
                'entity.name.tag',
                'meta.selector'
            ],
            settings: { foreground: '#d7ba7d' }
        },
        {
            scope: ['entity.other.attribute-name.class'],
            settings: { foreground: '#d7ba7d' }
        },
        {
            scope: ['entity.other.attribute-name.id'],
            settings: { foreground: '#d7ba7d' }
        },
        {
            scope: ['entity.other.attribute-name.pseudo-class', 'entity.other.attribute-name.pseudo-element'],
            settings: { foreground: '#4ec9b0' }
        },
        {
            scope: ['support.function', 'entity.name.function'],
            settings: { foreground: '#dcdcaa' }
        },
        {
            scope: ['punctuation', 'meta.brace'],
            settings: { foreground: '#d4d4d4' }
        },
        {
            scope: ['keyword.operator.arithmetic', 'keyword.operator.css'],
            settings: { foreground: '#d4d4d4' }
        },
        {
            scope: ['storage.type.js', 'storage.type.ts'],
            settings: { foreground: '#569cd6' }
        },
        {
            scope: ['entity.name.function.js', 'entity.name.function.ts'],
            settings: { foreground: '#dcdcaa' }
        },
        {
            scope: ['variable.other.readwrite', 'variable.other.object'],
            settings: { foreground: '#9cdcfe' }
        },
        {
            scope: ['variable.parameter'],
            settings: { foreground: '#9cdcfe' }
        },
        {
            scope: ['variable.language'],
            settings: { foreground: '#569cd6' }
        },
        {
            scope: ['constant.language'],
            settings: { foreground: '#569cd6' }
        },
        {
            scope: ['entity.name.tag.html'],
            settings: { foreground: '#f44747' }
        },
        {
            scope: ['entity.other.attribute-name.html'],
            settings: { foreground: '#9cdcfe' }
        },
    ]
}

const HIGHLIGHTER_CACHE_KEY = '__portfolioShikiHighlighterPromise'

const escapeHtml = (value = '') => value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

const highlighted = ref(`<pre><code>${escapeHtml((props.code || '').trim())}</code></pre>`)

const getHighlighter = () => {
    if (!globalThis[HIGHLIGHTER_CACHE_KEY]) {
        globalThis[HIGHLIGHTER_CACHE_KEY] = createHighlighter({
            themes: [],
            langs: [props.lang]
        })
    }

    return globalThis[HIGHLIGHTER_CACHE_KEY]
}

onMounted(async () => {
    const highlighter = await getHighlighter()

    highlighted.value = highlighter.codeToHtml((props.code || '').trim(), {
        lang: props.lang,
        theme: THEME
    })
})
</script>

<style>
.code-block {
    min-width: 100%;
    background: #25221f;
    border: 1px solid var(--backdrop-200);
    margin-block: .5rem;
    border-radius: 10px;
    corner-shape: bevel;
    padding: 2rem;

}

.code-block pre {
    font-family: 'rm-mono', monospace;
    overflow-x: auto;
    font-size: var(--small-size);
    line-height: 1.6;
}

code.snippet {
    font-family: 'rm-mono', monospace;
    background-color: var(--backdrop-200);
    color: var(--backdrop-600);
    padding: 0.25em 0.5em;
    font-size: var(--small-size);
    margin-inline: .5em;
}
</style>
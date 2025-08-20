//vitepress默认使用miniSearch
export const local = {
  provider: "local",
  options: {
    placeholder: "搜索文档...",
    // 配置中文界面翻译
    translations: {
      button: {
        buttonText: "搜索",
        buttonAriaLabel: "搜索文档",
      },
      modal: {
        displayDetails: "显示详细列表",
        resetButtonTitle: "清除查询条件",
        backButtonTitle: "关闭搜索",
        noResultsText: "无法找到相关结果",
        footer: {
          selectText: "选择",
          selectKeyAriaLabel: "回车",
          navigateText: "切换",
          navigateUpKeyAriaLabel: "上箭头",
          navigateDownKeyAriaLabel: "下箭头",
          closeText: "关闭",
          closeKeyAriaLabel: "escape",
        },
      },
    },
    // miniSearch 配置选项 - 优化本地搜索体验
    miniSearch: {
      /**
       * 搜索选项配置
       */
      searchOptions: {
        prefix: true, // 启用前缀匹配 (搜索"vite"可匹配"vitepress")
        fuzzy: 0.2, // 模糊匹配容错度 (0-1, 数值越高越宽松)
        combineWith: "AND", // 多关键词组合方式 ('AND' | 'OR')
        boost: {
          // 字段权重配置
          title: 4, // 页面标题权重最高
          heading: 2, // 章节标题权重中等
          text: 1, // 正文内容权重普通
        },
      },
      /**
       * 自定义搜索词处理函数 (可选)
       * @param {string} term - 搜索词
       * @returns {string} 处理后的搜索词
       */
      // processTerm: (term) => {
      //   // 例如：统一转为小写，移除特殊字符等
      //   return term.toLowerCase().replace(/[^\w\s\u4e00-\u9fff]/g, '');
      // }
    },
  },
};

export const algolia = {
  provider: "algolia",
  options: {
    appId: "YOUR_APP_ID", // 替换为您的Algolia App ID
    apiKey: "YOUR_API_KEY", // 替换为您的Algolia Search API Key
    indexName: "YOUR_INDEX_NAME", // 替换为您的索引名称
    placeholder: "搜索文档...",
    translations: {
      button: {
        buttonText: "搜索",
        buttonAriaLabel: "搜索",
      },
      modal: {
        searchBox: {
          resetButtonTitle: "清除查询条件",
          resetButtonAriaLabel: "清除查询条件",
          cancelButtonText: "取消",
          cancelButtonAriaLabel: "取消",
        },
        startScreen: {
          recentSearchesTitle: "搜索历史",
          noRecentSearchesText: "没有搜索历史",
          saveRecentSearchButtonTitle: "保存至搜索历史",
          removeRecentSearchButtonTitle: "从搜索历史中移除",
          favoriteSearchesTitle: "收藏",
          removeFavoriteSearchButtonTitle: "从收藏中移除",
        },
        errorScreen: {
          titleText: "无法获取结果",
          helpText: "你可能需要检查你的网络连接",
        },
        footer: {
          selectText: "选择",
          navigateText: "切换",
          closeText: "关闭",
          searchByText: "搜索提供者",
        },
        noResultsScreen: {
          noResultsText: "无法找到相关结果",
          suggestedQueryText: "你可以尝试查询",
          reportMissingResultsText: "你认为这个查询应该有结果？",
          reportMissingResultsLinkText: "点击反馈",
        },
      },
    },
  },
};

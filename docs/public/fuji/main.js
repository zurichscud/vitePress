// 语言配置
const translations = {
    'zh': {
        '富士滤镜实验室': '富士滤镜实验室',
        'FUJIFILM SIMULATION LAB': 'FUJIFILM SIMULATION LAB',
        '中文': '中文',
        'EN': 'EN',
        '滤镜商店': '滤镜商店',
        'Filter Store': '滤镜商店',
        '滤镜对比': '滤镜对比',
        'Filter Compare': '滤镜对比',
        '样片微调': '样片微调',
        'Fine Tune': '样片微调',
        '富士滤镜商店': '富士滤镜商店',
        'Fuji Filter Store': '富士滤镜商店',
        '探索富士胶片模拟的丰富世界，每个滤镜都有其独特的色彩科学和美学特征。': '探索富士胶片模拟的丰富世界，每个滤镜都有其独特的色彩科学和美学特征。',
        'Explore the rich world of Fujifilm simulations, each with unique color science and aesthetic characteristics.': '探索富士胶片模拟的丰富世界，每个滤镜都有其独特的色彩科学和美学特征。',
        '滤镜对比实验室': '滤镜对比实验室',
        'Filter Comparison Lab': '滤镜对比实验室',
        '选择不同滤镜，实时对比同一场景下的色彩表现差异。': '选择不同滤镜，实时对比同一场景下的色彩表现差异。',
        'Select different filters to compare color performance differences in real-time.': '选择不同滤镜，实时对比同一场景下的色彩表现差异。',
        '选择滤镜': '选择滤镜',
        'Select Filter': '选择滤镜',
        '技术参数': '技术参数',
        'Technical Specs': '技术参数',
        '色彩特性': '色彩特性',
        'Color Characteristics': '色彩特性',
        '选择滤镜查看详细参数': '选择滤镜查看详细参数',
        'Select a filter to view detailed parameters': '选择滤镜查看详细参数',
        '对比度': '对比度',
        'Contrast': '对比度',
        '饱和度': '饱和度',
        'Saturation': '饱和度',
        '样片微调工作室': '样片微调工作室',
        'Fine Adjustment Studio': '样片微调工作室',
        '精确调整高光、阴影、饱和度和颗粒感，创造属于你的独特风格。': '精确调整高光、阴影、饱和度和颗粒感，创造属于你的独特风格。',
        'Precisely adjust highlights, shadows, saturation, and grain to create your unique style.': '精确调整高光、阴影、饱和度和颗粒感，创造属于你的独特风格。',
        '调整参数': '调整参数',
        'Adjustment Parameters': '调整参数',
        '高光色调': '高光色调',
        'Highlight Tone': '高光色调',
        '阴影色调': '阴影色调',
        'Shadow Tone': '阴影色调',
        '颗粒感': '颗粒感',
        'Grain': '颗粒感',
        '重置参数': '重置参数',
        'Reset Parameters': '重置参数',
        '© 2024 Fuji Film Simulation Lab. Crafted with passion for photography.': '© 2024 Fuji Film Simulation Lab. Crafted with passion for photography.'
    },
    'en': {
        '富士滤镜实验室': 'Fuji Film Simulation Lab',
        'FUJIFILM SIMULATION LAB': 'FUJIFILM SIMULATION LAB',
        '中文': '中文',
        'EN': 'EN',
        '滤镜商店': 'Filter Store',
        'Filter Store': 'Filter Store',
        '滤镜对比': 'Filter Compare',
        'Filter Compare': 'Filter Compare',
        '样片微调': 'Fine Tune',
        'Fine Tune': 'Fine Tune',
        '富士滤镜商店': 'Fuji Filter Store',
        'Fuji Filter Store': 'Fuji Filter Store',
        '探索富士胶片模拟的丰富世界，每个滤镜都有其独特的色彩科学和美学特征。': 'Explore the rich world of Fujifilm simulations, each with unique color science and aesthetic characteristics.',
        'Explore the rich world of Fujifilm simulations, each with unique color science and aesthetic characteristics.': 'Explore the rich world of Fujifilm simulations, each with unique color science and aesthetic characteristics.',
        '滤镜对比实验室': 'Filter Comparison Lab',
        'Filter Comparison Lab': 'Filter Comparison Lab',
        '选择不同滤镜，实时对比同一场景下的色彩表现差异。': 'Select different filters to compare color performance differences in real-time.',
        'Select different filters to compare color performance differences in real-time.': 'Select different filters to compare color performance differences in real-time.',
        '选择滤镜': 'Select Filter',
        'Select Filter': 'Select Filter',
        '技术参数': 'Technical Specs',
        'Technical Specs': 'Technical Specs',
        '色彩特性': 'Color Characteristics',
        'Color Characteristics': 'Color Characteristics',
        '选择滤镜查看详细参数': 'Select a filter to view detailed parameters',
        'Select a filter to view detailed parameters': 'Select a filter to view detailed parameters',
        '对比度': 'Contrast',
        'Contrast': 'Contrast',
        '饱和度': 'Saturation',
        'Saturation': 'Saturation',
        '样片微调工作室': 'Fine Adjustment Studio',
        'Fine Adjustment Studio': 'Fine Adjustment Studio',
        '精确调整高光、阴影、饱和度和颗粒感，创造属于你的独特风格。': 'Precisely adjust highlights, shadows, saturation, and grain to create your unique style.',
        'Precisely adjust highlights, shadows, saturation, and grain to create your unique style.': 'Precisely adjust highlights, shadows, saturation, and grain to create your unique style.',
        '调整参数': 'Adjustment Parameters',
        'Adjustment Parameters': 'Adjustment Parameters',
        '高光色调': 'Highlight Tone',
        'Highlight Tone': 'Highlight Tone',
        '阴影色调': 'Shadow Tone',
        'Shadow Tone': 'Shadow Tone',
        '颗粒感': 'Grain',
        'Grain': 'Grain',
        '重置参数': 'Reset Parameters',
        'Reset Parameters': 'Reset Parameters',
        '© 2024 Fuji Film Simulation Lab. Crafted with passion for photography.': '© 2024 Fuji Film Simulation Lab. Crafted with passion for photography.'
    }
};

// 富士滤镜数据（包含中英文描述）
const fujiFilters = [
    {
        id: 'provia',
        name: 'PROVIA',
        description: { zh: '标准模式', en: 'Standard Mode' },
        fullName: 'PROVIA/标准',
        characteristics: {
            zh: '忠实于色彩原貌，适用于从肖像到风景的多种拍摄对象。色彩平衡，对比度适中。',
            en: 'Faithful color reproduction, suitable for various subjects from portraits to landscapes. Balanced colors with moderate contrast.'
        },
        contrast: 50,
        saturation: 50,
        image: 'provia_tokyo.png',
        canister: 'provia_canister.png'
    },
    {
        id: 'velvia',
        name: 'VELVIA',
        description: { zh: '鲜艳模式', en: 'Vivid Mode' },
        fullName: 'VELVIA/鲜艳',
        characteristics: {
            zh: '色彩饱和、对比度高的色调，适用于拍摄自然风景。蓝色偏洋红，绿色层次丰富。',
            en: 'Highly saturated colors with high contrast tones, ideal for natural landscapes. Blues shift toward magenta, rich green gradations.'
        },
        contrast: 85,
        saturation: 95,
        image: 'velvia_tokyo.png',
        canister: 'velvia_canister.png'
    },
    {
        id: 'astia',
        name: 'ASTIA',
        description: { zh: '柔和模式', en: 'Soft Mode' },
        fullName: 'ASTIA/柔和',
        characteristics: {
            zh: '柔和色调和高饱和度，表现出自然肤色和平滑的渐变效果。适合室外人像拍摄。',
            en: 'Soft tones with high saturation, expressing natural skin tones and smooth gradations. Ideal for outdoor portrait photography.'
        },
        contrast: 40,
        saturation: 70,
        image: 'astia_tokyo.png',
        canister: 'astia_canister.png'
    },
    {
        id: 'classic-chrome',
        name: 'CLASSIC CHROME',
        description: { zh: '经典正片', en: 'Classic Chrome' },
        fullName: 'CLASSIC CHROME',
        characteristics: {
            zh: '低饱和度，高对比度，复古色调。适合纪实摄影和怀旧风格作品。',
            en: 'Low saturation with high contrast and vintage tones. Perfect for documentary photography and nostalgic style works.'
        },
        contrast: 75,
        saturation: 30,
        image: 'classic_chrome_tokyo.png',
        canister: 'classic_chrome_canister.png'
    },
    {
        id: 'classic-negative',
        name: 'CLASSIC Neg.',
        description: { zh: '经典负片', en: 'Classic Negative' },
        fullName: 'CLASSIC Neg.',
        characteristics: {
            zh: '基于SUPERIA胶片，温暖色调，强对比度。适合街拍摄影和日常记录。',
            en: 'Based on SUPERIA film with warm tones and strong contrast. Perfect for street photography and daily documentation.'
        },
        contrast: 80,
        saturation: 85,
        image: 'classic_negative_tokyo.png',
        canister: 'classic_negative_canister.png'
    },
    {
        id: 'pro-neg-hi',
        name: 'PRO Neg. Hi',
        description: { zh: '专业负片Hi', en: 'PRO Neg. Hi' },
        fullName: 'PRO Neg. Hi',
        characteristics: {
            zh: '对比度稍高，适合户外人像拍摄。在平淡光线下也能获得适度的阴影。',
            en: 'Slightly higher contrast, suitable for outdoor portrait photography. Provides moderate shadows even in flat lighting conditions.'
        },
        contrast: 65,
        saturation: 55,
        image: 'pro_neg_hi_tokyo.png',
        canister: 'pro_neg_hi_canister.png'
    },
    {
        id: 'pro-neg-std',
        name: 'PRO Neg. Std',
        description: { zh: '专业负片Std', en: 'PRO Neg. Std' },
        fullName: 'PRO Neg. Std',
        characteristics: {
            zh: '色调柔和，增加了可用于肤色的色相范围，因此它成为摄影棚肖像摄影的最佳选择。',
            en: 'Soft tones with expanded hue range for skin tones, making it the best choice for studio portrait photography.'
        },
        contrast: 35,
        saturation: 45,
        image: 'pro_neg_std_tokyo.png',
        canister: 'pro_neg_std_canister.png'
    },
    {
        id: 'eterna',
        name: 'ETERNA',
        description: { zh: '电影模式', en: 'Cinema Mode' },
        fullName: 'ETERNA/Cinema',
        characteristics: {
            zh: '饱和度被抑制，丰富阴影层次。适合电影风格表达和动态场景捕捉。',
            en: 'Suppressed saturation with rich shadow gradations. Ideal for cinematic expression and dynamic scene capture.'
        },
        contrast: 30,
        saturation: 25,
        image: 'eterna_tokyo.png',
        canister: 'eterna_canister.png'
    },
    {
        id: 'nostalgic-negative',
        name: 'NOSTALGIC Neg.',
        description: { zh: '怀旧负片', en: 'Nostalgic Negative' },
        fullName: 'NOSTALGIC Neg.',
        characteristics: {
            zh: '琥珀色高光，充满活力的阴影色调。具有经典印刷照片的外观，适合独特的图像制作。',
            en: 'Amber-tinted highlights with vibrant shadow tones. Features classic printed photograph appearance for distinctive image creation.'
        },
        contrast: 60,
        saturation: 75,
        image: 'nostalgic_negative_tokyo.png',
        canister: 'nostalgic_negative_canister.png'
    },
    {
        id: 'reala-ace',
        name: 'REALA ACE',
        description: { zh: '真实王牌', en: 'Reala Ace' },
        fullName: 'REALA ACE',
        characteristics: {
            zh: '极其真实的色彩再现和硬色调。自然的渲染适合所有主题和环境。',
            en: 'Extremely accurate color reproduction with hard tonality. Natural rendering suitable for all subjects and environments.'
        },
        contrast: 55,
        saturation: 60,
        image: 'reala_ace_tokyo.png',
        canister: 'reala_ace_canister.png'
    },
    {
        id: 'acros',
        name: 'ACROS',
        description: { zh: '黑白模式', en: 'B&W Mode' },
        fullName: 'ACROS',
        characteristics: {
            zh: '拍摄高渐变效果和高锐度的黑白照片。具有丰富的颗粒感和优雅的黑白影调。',
            en: 'Capture black and white photos with high gradation effects and sharpness. Rich grain texture and elegant monochrome tones.'
        },
        contrast: 70,
        saturation: 0,
        image: 'acros_tokyo.png',
        canister: 'acros_canister.png'
    },
    {
        id: 'monochrome',
        name: 'MONOCHROME',
        description: { zh: '单色模式', en: 'Monochrome' },
        fullName: 'MONOCHROME',
        characteristics: {
            zh: '标准黑白照片，具有平滑的影调特征和经典的单色美学。',
            en: 'Standard black and white photos with smooth tonal characteristics and classic monochrome aesthetics.'
        },
        contrast: 50,
        saturation: 0,
        image: 'monochrome_tokyo.png',
        canister: 'monochrome_canister.png'
    },
    {
        id: 'sepia',
        name: 'SEPIA',
        description: { zh: '棕褐色', en: 'Sepia' },
        fullName: 'SEPIA',
        characteristics: {
            zh: '经典的棕褐色调，营造温暖怀旧的氛围，适合复古风格摄影。',
            en: 'Classic sepia tones creating warm nostalgic atmosphere, perfect for vintage style photography.'
        },
        contrast: 45,
        saturation: 20,
        image: 'sepia_tokyo.png',
        canister: 'sepia_canister.png'
    },
    {
        id: 'eterna-bleach',
        name: 'ETERNA BLEACH',
        description: { zh: '漂白效果', en: 'Bleach Bypass' },
        fullName: 'ETERNA BLEACH BYPASS',
        characteristics: {
            zh: '高对比度，低饱和度美学。通过漂白效果创造出富有表现力和戏剧性的图像。',
            en: 'High contrast with low saturation aesthetics. Creates expressive and dramatic images through bleach bypass effect.'
        },
        contrast: 90,
        saturation: 15,
        image: 'eterna_bleach_tokyo.png',
        canister: 'eterna_canister.png'
    },
    {
        id: 'acros-yellow',
        name: 'ACROS+Ye',
        description: { zh: 'ACROS+黄滤镜', en: 'ACROS+Yellow Filter' },
        fullName: 'ACROS+黄色滤镜',
        characteristics: {
            zh: '黑白摄影中使用黄色滤镜，加深蓝天空，增强整体对比度。',
            en: 'Uses yellow filter in black and white photography to darken blue skies and enhance overall contrast.'
        },
        contrast: 75,
        saturation: 0,
        image: 'acros_yellow_tokyo.png',
        canister: 'acros_canister.png'
    },
    {
        id: 'acros-red',
        name: 'ACROS+R',
        description: { zh: 'ACROS+红滤镜', en: 'ACROS+Red Filter' },
        fullName: 'ACROS+红色滤镜',
        characteristics: {
            zh: '黑白摄影中使用红色滤镜，极大加深蓝天空，创造戏剧性对比效果。',
            en: 'Uses red filter in black and white photography to dramatically darken blue skies and create dramatic contrast effects.'
        },
        contrast: 85,
        saturation: 0,
        image: 'acros_red_tokyo.png',
        canister: 'acros_canister.png'
    }
];

// 全局变量
let currentTab = 'store';
let selectedFilter = 'provia';
let originalImage = null;
let canvas = null;
let ctx = null;
let currentLang = 'zh';
let isMobile = false;

// 初始化应用
document.addEventListener('DOMContentLoaded', function () {
    checkMobile();
    initializeApp();
});

// 检查是否为移动设备
function checkMobile() {
    isMobile = window.innerWidth <= 768;

    // 监听窗口大小变化
    window.addEventListener('resize', function () {
        const wasMobile = isMobile;
        isMobile = window.innerWidth <= 768;

        // 如果设备类型发生变化，重新生成界面
        if (wasMobile !== isMobile) {
            generateFilterCards();
            generateFilterSelector();
        }
    });
}

function initializeApp() {
    generateFilterCards();
    generateFilterSelector();
    initializeCanvas();
    setupSliders();
    loadOriginalImage();
    updateLanguage();
    setupMobileOptimizations();
}

// 移动端优化设置
function setupMobileOptimizations() {
    // 防止双击缩放
    document.addEventListener('touchstart', function (e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    });

    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (e) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);

    // 优化触摸滚动
    document.addEventListener('touchmove', function (e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    });
}

// 语言切换函数
function toggleLanguage() {
    const toggle = document.getElementById('lang-toggle');
    currentLang = toggle.checked ? 'en' : 'zh';

    // 更新body类
    if (currentLang === 'en') {
        document.body.classList.add('en');
    } else {
        document.body.classList.remove('en');
    }

    updateLanguage();
    generateFilterCards();
    updateComparison();
}

// 更新语言显示
function updateLanguage() {
    const elements = document.querySelectorAll('[data-zh][data-en]');
    elements.forEach(element => {
        const text = element.getAttribute(currentLang === 'zh' ? 'data-zh' : 'data-en');
        if (text) {
            element.textContent = text;
        }
    });
}

// 生成滤镜商店卡片
function generateFilterCards() {
    const grid = document.getElementById('filter-grid');
    grid.innerHTML = '';

    // 移动端优化：调整网格列数
    const gridClass = isMobile ?
        (window.innerWidth <= 480 ? 'grid-cols-1' : 'grid-cols-2') :
        'md:grid-cols-2 lg:grid-cols-4';

    grid.className = `filter-grid grid ${gridClass} gap-4 md:gap-6`;

    fujiFilters.forEach(filter => {
        const card = document.createElement('div');
        card.className = 'filter-card bg-gray-900 rounded-lg p-4 md:p-6 cursor-pointer';
        card.onclick = () => selectFilter(filter.id);

        const description = filter.description[currentLang];

        // 移动端优化：调整卡片内容
        const iconSize = isMobile ? 'w-16 h-16' : 'w-24 h-24';
        const titleSize = isMobile ? 'text-base' : 'text-lg';
        const descSize = isMobile ? 'text-xs' : 'text-sm';

        card.innerHTML = `
            <div class="flex flex-col items-center text-center">
                <div class="${iconSize} mb-3 md:mb-4 bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                    <img src="${filter.canister}" alt="${filter.name}" class="w-full h-full object-cover">
                </div>
                <h3 class="${titleSize} font-semibold text-white mb-1">${filter.name}</h3>
                <p class="${descSize} text-gray-400 mb-2 md:mb-3">${description}</p>
                <div class="text-xs text-gray-500">
                    <span>${currentLang === 'zh' ? '对比度' : 'Contrast'}: ${filter.contrast}%</span>
                    <span class="mx-2">|</span>
                    <span>${currentLang === 'zh' ? '饱和度' : 'Saturation'}: ${filter.saturation}%</span>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// 生成滤镜选择器
function generateFilterSelector() {
    const selector = document.getElementById('filter-selector');
    selector.innerHTML = '';

    // 移动端优化：调整网格布局
    const gridClass = isMobile ?
        (window.innerWidth <= 480 ? 'grid-cols-2' : 'grid-cols-3') :
        'md:grid-cols-4 lg:grid-cols-2';

    selector.className = `filter-selector grid ${gridClass} gap-2`;

    fujiFilters.forEach(filter => {
        const button = document.createElement('button');

        // 移动端优化：调整按钮样式
        const buttonClass = isMobile ?
            'px-2 py-1 text-xs' :
            'px-3 py-2 text-sm';

        button.className = `${buttonClass} rounded-lg transition-colors ${filter.id === selectedFilter ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`;

        button.textContent = filter.name;
        button.onclick = () => {
            selectedFilter = filter.id;
            updateComparison();
            updateFilterSelector();
        };

        selector.appendChild(button);
    });
}

// 更新滤镜选择器状态
function updateFilterSelector() {
    const buttons = document.querySelectorAll('#filter-selector button');
    buttons.forEach((button, index) => {
        const filter = fujiFilters[index];

        // 移动端优化：调整按钮样式
        const buttonClass = isMobile ?
            'px-2 py-1 text-xs' :
            'px-3 py-2 text-sm';

        if (filter.id === selectedFilter) {
            button.className = `${buttonClass} rounded-lg transition-colors bg-red-600 text-white`;
        } else {
            button.className = `${buttonClass} rounded-lg transition-colors bg-gray-800 text-gray-300 hover:bg-gray-700`;
        }
    });
}

// 选择滤镜
function selectFilter(filterId) {
    selectedFilter = filterId;
    switchTab('compare');
    updateComparison();
    updateFilterSelector();
}

// 切换标签页
function switchTab(tabName) {
    // 隐藏所有标签页内容
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });

    // 显示选中的标签页
    document.getElementById(`${tabName}-tab`).classList.remove('hidden');

    // 更新标签按钮状态
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    event.target.classList.add('active');

    currentTab = tabName;

    // 移动端优化：滚动到顶部
    if (isMobile) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // 如果切换到调整标签页，重新绘制画布
    if (tabName === 'adjust') {
        setTimeout(() => {
            drawImageToCanvas();
        }, 100);
    }
}

// 更新对比视图
function updateComparison() {
    const filter = fujiFilters.find(f => f.id === selectedFilter);
    if (!filter) return;

    const image = document.getElementById('comparison-image');

    image.src = filter.image;
    image.alt = currentLang === 'zh' ? `${filter.name}滤镜样张` : `${filter.name} Filter Sample`;

    // 更新技术参数
    document.getElementById('color-characteristics').textContent = filter.characteristics[currentLang];
    document.getElementById('contrast-bar').style.width = `${filter.contrast}%`;
    document.getElementById('saturation-bar').style.width = `${filter.saturation}%`;
}

// 初始化画布
function initializeCanvas() {
    canvas = document.getElementById('adjustment-canvas');
    ctx = canvas.getContext('2d');

    // 移动端优化：调整画布尺寸
    const container = canvas.parentElement;
    const maxWidth = container.clientWidth;

    if (isMobile && maxWidth < 800) {
        const scale = maxWidth / 800;
        canvas.width = maxWidth;
        canvas.height = 450 * scale;
    } else {
        canvas.width = 800;
        canvas.height = 450;
    }

    canvas.style.width = '100%';
    canvas.style.height = 'auto';
}

// 加载原始图像
function loadOriginalImage() {
    originalImage = new Image();
    originalImage.onload = function () {
        drawImageToCanvas();
    };
    originalImage.src = 'provia_tokyo.png';
}

// 绘制图像到画布
function drawImageToCanvas() {
    if (!ctx || !originalImage) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 移动端优化：调整图像绘制尺寸
    const drawWidth = canvas.width;
    const drawHeight = canvas.height;

    ctx.drawImage(originalImage, 0, 0, drawWidth, drawHeight);

    // 应用当前调整参数
    applyAdjustments();
}

// 设置滑块
function setupSliders() {
    const sliders = ['highlights', 'shadows', 'saturation', 'grain'];

    sliders.forEach(param => {
        const slider = document.getElementById(`${param}-slider`);
        const valueDisplay = document.getElementById(`${param}-value`);

        // 移动端优化：减少滑块灵敏度
        let isTouch = false;

        slider.addEventListener('input', function () {
            valueDisplay.textContent = this.value;

            // 移动端优化：防抖处理
            if (isMobile) {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    applyAdjustments();
                }, 100);
            } else {
                applyAdjustments();
            }
        });

        // 移动端触摸优化
        slider.addEventListener('touchstart', function () {
            isTouch = true;
        });

        slider.addEventListener('touchend', function () {
            isTouch = false;
            if (isMobile) {
                applyAdjustments();
            }
        });
    });
}

// 应用调整
function applyAdjustments() {
    if (!ctx || !originalImage) return;

    // 重新绘制原始图像
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 移动端优化：调整图像绘制尺寸
    const drawWidth = canvas.width;
    const drawHeight = canvas.height;

    ctx.drawImage(originalImage, 0, 0, drawWidth, drawHeight);

    // 获取调整参数
    const highlights = parseInt(document.getElementById('highlights-slider').value);
    const shadows = parseInt(document.getElementById('shadows-slider').value);
    const saturation = parseInt(document.getElementById('saturation-slider').value);
    const grain = parseInt(document.getElementById('grain-slider').value);

    // 移动端优化：减少处理频率
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // 移动端优化：分批处理大数据
    const batchSize = isMobile ? 10000 : 50000;
    let processed = 0;

    function processBatch() {
        const end = Math.min(processed + batchSize, data.length);

        for (let i = processed; i < end; i += 4) {
            let r = data[i];
            let g = data[i + 1];
            let b = data[i + 2];

            // 转换为HSL进行调整
            const hsl = rgbToHsl(r, g, b);

            // 调整饱和度
            hsl.s = Math.max(0, Math.min(1, hsl.s * (1 + saturation / 100)));

            // 调整亮度（影响高光和阴影）
            let brightness = hsl.l;
            if (brightness > 0.5) {
                // 高光区域
                brightness = Math.max(0, Math.min(1, brightness * (1 + highlights / 200)));
            } else {
                // 阴影区域
                brightness = Math.max(0, Math.min(1, brightness * (1 + shadows / 200)));
            }
            hsl.l = brightness;

            // 转换回RGB
            const rgb = hslToRgb(hsl.h, hsl.s, hsl.l);
            data[i] = rgb.r;
            data[i + 1] = rgb.g;
            data[i + 2] = rgb.b;
        }

        processed = end;

        if (processed < data.length) {
            // 继续处理下一批
            setTimeout(processBatch, 10);
        } else {
            // 应用颗粒效果
            if (grain > 0) {
                applyGrainEffect(data, canvas.width, canvas.height, grain);
            }

            // 更新画布
            ctx.putImageData(imageData, 0, 0);
        }
    }

    processBatch();
}

// 应用颗粒效果
function applyGrainEffect(data, width, height, intensity) {
    const grainAmount = intensity / 100 * 50; // 最大50的颗粒强度

    for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * grainAmount;
        data[i] = Math.max(0, Math.min(255, data[i] + noise));
        data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise));
        data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise));
    }
}

// 重置调整参数
function resetAdjustments() {
    document.getElementById('highlights-slider').value = 0;
    document.getElementById('shadows-slider').value = 0;
    document.getElementById('saturation-slider').value = 0;
    document.getElementById('grain-slider').value = 0;

    document.getElementById('highlights-value').textContent = '0';
    document.getElementById('shadows-value').textContent = '0';
    document.getElementById('saturation-value').textContent = '0';
    document.getElementById('grain-value').textContent = '0';

    drawImageToCanvas();
}

// RGB转HSL
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // 灰色
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return { h, s, l };
}

// HSL转RGB
function hslToRgb(h, s, l) {
    let r, g, b;

    if (s === 0) {
        r = g = b = l; // 灰色
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

// 初始化时更新对比视图
updateComparison();
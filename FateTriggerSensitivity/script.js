// 게임별 계산식 정의
const gameCalculations = {
    csgo: (sensitivity) => sensitivity * 251,           // Counter Strike
    apex: (sensitivity) => sensitivity * 251,           // Apex
    valorant: (sensitivity) => sensitivity * 800,       // Valorant
    strinova: (sensitivity) => sensitivity * 159        // Strinova
};

// 게임별 이름
const gameNames = {
    csgo: "Counter Strike",
    apex: "Apex",
    valorant: "Valorant",
    strinova: "Strinova"
};

// DOM 요소들
const sourceGameSelect = document.getElementById('sourceGame');
const sourceSensitivityInput = document.getElementById('sourceSensitivity');
const convertBtn = document.getElementById('convertBtn');
const resultSection = document.getElementById('resultSection');
const baseSensitivitySpan = document.getElementById('baseSensitivity');
const ironSightSpan = document.getElementById('ironSight');
const scope1xSpan = document.getElementById('scope1x');
const scope2xSpan = document.getElementById('scope2x');
const scope3xSpan = document.getElementById('scope3x');
const scope4xSpan = document.getElementById('scope4x');
const scope8xSpan = document.getElementById('scope8x');
const scope10xSpan = document.getElementById('scope10x');

// 이벤트 리스너 등록
convertBtn.addEventListener('click', calculateSensitivity);

// 감도 계산 함수
function calculateSensitivity() {
    // 입력값 검증
    const sourceSensitivity = parseFloat(sourceSensitivityInput.value);

    if (!sourceSensitivity) {
        alert('감도를 입력해주세요!');
        return;
    }

    if (sourceSensitivity <= 0) {
        alert('감도는 0보다 큰 값이어야 합니다!');
        return;
    }

    // 게임별 계산식 적용
    const calculatedSensitivity = gameCalculations[sourceGameSelect.value](sourceSensitivity);
    
    // 결과 표시
    displayResults(calculatedSensitivity);
}

// 결과 표시 함수
function displayResults(baseSensitivity) {
    // 기본 감도
    baseSensitivitySpan.textContent = Math.round(baseSensitivity);
    
    // 아이언 사이트 (기본 감도 × 0.8)
    ironSightSpan.textContent = Math.round(baseSensitivity * 0.8);
    
    // 1배율 (기본 감도 × 0.77)
    scope1xSpan.textContent = Math.round(baseSensitivity * 0.77);
    
    // 2배율 (기본 감도 × 0.73)
    scope2xSpan.textContent = Math.round(baseSensitivity * 0.73);
    
    // 3배율 (기본 감도 × 0.71)
    scope3xSpan.textContent = Math.round(baseSensitivity * 0.71);
    
    // 4배율 (기본 감도 × 0.71)
    scope4xSpan.textContent = Math.round(baseSensitivity * 0.71);
    
    // 8배율 (기본 감도 × 0.7)
    scope8xSpan.textContent = Math.round(baseSensitivity * 0.7);
    
    // 10배율 (기본 감도 × 0.7)
    scope10xSpan.textContent = Math.round(baseSensitivity * 0.7);
    
    resultSection.style.display = 'block';
    
    // 결과 섹션으로 스크롤
    resultSection.scrollIntoView({ behavior: 'smooth' });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 입력 필드에 Enter 키 이벤트 추가
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateSensitivity();
            }
        });
    });
});

// 입력값 실시간 검증
sourceSensitivityInput.addEventListener('input', function() {
    const value = parseFloat(this.value);
    if (value <= 0 && this.value !== '') {
        this.style.borderColor = '#ff6b6b';
    } else {
        this.style.borderColor = '#e1e5e9';
    }
});

// 도구팁 추가
function addTooltip(element, text) {
    element.title = text;
}

// 주요 입력 필드에 도구팁 추가
addTooltip(sourceSensitivityInput, '계산하고 싶은 마우스 감도 설정값을 입력하세요'); 
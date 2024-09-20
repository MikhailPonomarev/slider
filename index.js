const admiral = {
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    repairTime: '3.5 months',
    imgSrc: './assets/admiral.png',
};

const thieves = {
    city: 'Sochi Thieves',
    area: '105 m2',
    repairTime: '4 months',
    imgSrc: './assets/thieves.png',
};

const patriotic = {
    city: 'Rostov-on-Don Patriotic',
    area: '92 m2',
    repairTime: '3 months',
    imgSrc: './assets/patriotic.png',
};

const apartmentsDataArr = [admiral, thieves, patriotic];

const getCurrentImgIndex = () => {
    const currentImgSrc = document.querySelector('.apartment-photo').src;
    return apartmentsDataArr.findIndex((obj) => currentImgSrc.includes(obj.imgSrc.substring(1)));
};

const greyColorHex = '#FFFFFF4D';
const whiteColorRgb = 'rgb(255, 255, 255)';

const switchNavigationDots = (nextIndex) => {
    const greyColorHex = '#FFFFFF4D';
    const whiteColorRgb = 'rgb(255, 255, 255)';
    const navigationDots = document.querySelectorAll('.navigation__items > .item');

    const currentActiveDotIndex = Array.from(navigationDots).findIndex((it) => {
        return window.getComputedStyle(it).backgroundColor === whiteColorRgb;
    });

    navigationDots.item(currentActiveDotIndex).style.backgroundColor = greyColorHex;
    navigationDots.item(nextIndex).style.backgroundColor = whiteColorRgb;
};

const displayNext = () => {
    const currentImgIndex = getCurrentImgIndex();
    let nextIndex;

    if (currentImgIndex < apartmentsDataArr.length - 1) {
        nextIndex = currentImgIndex + 1;
        setNewData(apartmentsDataArr[nextIndex]);
    }
    if (currentImgIndex === apartmentsDataArr.length - 1) {
        nextIndex = 0;
        setNewData(apartmentsDataArr[nextIndex]);
    }

    switchNavigationDots(nextIndex);
};

const displayPrev = () => {
    const currentImgIndex = getCurrentImgIndex();
    let nextIndex;

    if (currentImgIndex > 0) {
        nextIndex = currentImgIndex - 1;
        setNewData(apartmentsDataArr[nextIndex]);
    }
    if (currentImgIndex === 0) {
        nextIndex = apartmentsDataArr.length - 1;
        setNewData(apartmentsDataArr[apartmentsDataArr.length - 1]);
    }

    switchNavigationDots(nextIndex);
};

const setNewData = (data) => {
    document.querySelector('.parameters-city .parameters__text').textContent = data.city;
    document.querySelector('.parameters-apartment-area .parameters__text').textContent = data.area;
    document.querySelector('.parameters-repair-time .parameters__text').textContent = data.repairTime;
    document.querySelector('.apartment-photo').src = data.imgSrc;
};

document.querySelector('.navigation__next-arrow').addEventListener('click', displayNext);

document.querySelector('.navigation__prev-arrow').addEventListener('click', displayPrev);

document.querySelector('.navigation__items > .item:nth-of-type(1)').addEventListener('click', () => {
    const index = 0;

    switchNavigationDots(index);
    setNewData(apartmentsDataArr[index]);
});

document.querySelector('.navigation__items > .item:nth-of-type(2)').addEventListener('click', () => {
    const index = 1;

    switchNavigationDots(index);
    setNewData(apartmentsDataArr[index]);
});

document.querySelector('.navigation__items > .item:nth-of-type(3)').addEventListener('click', () => {
    const index = 2;

    switchNavigationDots(index);
    setNewData(apartmentsDataArr[index]);
});

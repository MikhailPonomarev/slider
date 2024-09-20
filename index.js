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

const apartmentsDataArray = [admiral, thieves, patriotic];

const getCurrentImgIndex = () => {
    const currentImgSrc = document.querySelector('.apartment-photo').src;
    return apartmentsDataArray.findIndex((obj) => currentImgSrc.includes(obj.imgSrc.substring(1)));
};

const switchNavigationItems = (nextIndex) => {
    const greyColorHex = '#FFFFFF4D';
    const whiteColorRgb = 'rgb(255, 255, 255)';

    const navigationDots = document.querySelectorAll('.dot');
    const currentActiveDotIndex = Array.from(navigationDots).findIndex((dot) => {
        return window.getComputedStyle(dot).backgroundColor === whiteColorRgb;
    });
    navigationDots.item(currentActiveDotIndex).style.backgroundColor = greyColorHex;
    navigationDots.item(nextIndex).style.backgroundColor = whiteColorRgb;

    const goldenColorRgb = 'rgb(227, 184, 115)';
    const navigationTabs = document.querySelectorAll('.tab');
    const currenActiveTabIndex = Array.from(navigationTabs).findIndex((tab) => {
        return window.getComputedStyle(tab).color === goldenColorRgb;
    });
    navigationTabs.item(currenActiveTabIndex).style.color = greyColorHex;
    navigationTabs.item(nextIndex).style.color = goldenColorRgb;
};

const displayNextData = () => {
    const currentImgIndex = getCurrentImgIndex();
    let nextIndex;

    if (currentImgIndex < apartmentsDataArray.length - 1) {
        nextIndex = currentImgIndex + 1;
        setNewData(apartmentsDataArray[nextIndex]);
    }
    if (currentImgIndex === apartmentsDataArray.length - 1) {
        nextIndex = 0;
        setNewData(apartmentsDataArray[nextIndex]);
    }

    switchNavigationItems(nextIndex);
};

const displayPrevData = () => {
    const currentImgIndex = getCurrentImgIndex();
    let nextIndex;

    if (currentImgIndex > 0) {
        nextIndex = currentImgIndex - 1;
        setNewData(apartmentsDataArray[nextIndex]);
    }
    if (currentImgIndex === 0) {
        nextIndex = apartmentsDataArray.length - 1;
        setNewData(apartmentsDataArray[apartmentsDataArray.length - 1]);
    }

    switchNavigationItems(nextIndex);
};

const displayExactData = (index) => {
    setNewData(apartmentsDataArray[index]);
    switchNavigationItems(index);
};

const setNewData = (data) => {
    document.querySelector('.parameters-city .parameters__text').textContent = data.city;
    document.querySelector('.parameters-apartment-area .parameters__text').textContent = data.area;
    document.querySelector('.parameters-repair-time .parameters__text').textContent = data.repairTime;
    document.querySelector('.apartment-photo').src = data.imgSrc;
};

document.querySelector('.navigation__next-arrow').addEventListener('click', displayNextData);

document.querySelector('.navigation__prev-arrow').addEventListener('click', displayPrevData);

document.querySelector('.dot:nth-of-type(1)').addEventListener('click', () => {
    displayExactData(0);
});

document.querySelector('.dot:nth-of-type(2)').addEventListener('click', () => {
    displayExactData(1);
});

document.querySelector('.dot:nth-of-type(3)').addEventListener('click', () => {
    displayExactData(2);
});

document.querySelector('.tab:nth-of-type(1)').addEventListener('click', () => {
    displayExactData(0);
});

document.querySelector('.tab:nth-of-type(2)').addEventListener('click', () => {
    displayExactData(1);
});

document.querySelector('.tab:nth-of-type(3)').addEventListener('click', () => {
    displayExactData(2);
});

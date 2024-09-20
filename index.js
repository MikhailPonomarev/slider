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

const displayNext = () => {
    const currentImgIndex = getCurrentImgIndex();

    const navigationDots = document.querySelectorAll('.item');
    let nextIndex;
    if (currentImgIndex < apartmentsDataArr.length - 1) {
        nextIndex = currentImgIndex + 1;
        setNewData(apartmentsDataArr[nextIndex]);
        navigationDots.item(currentImgIndex).style.backgroundColor = '#FFFFFF4D';
        navigationDots.item(nextIndex).style.backgroundColor = '#FFFFFF';
    }
    if (currentImgIndex === apartmentsDataArr.length - 1) {
        nextIndex = 0;
        setNewData(apartmentsDataArr[nextIndex]);
        navigationDots.item(currentImgIndex).style.backgroundColor = '#FFFFFF4D';
        navigationDots.item(nextIndex).style.backgroundColor = '#FFFFFF';
    }
};

const displayPrev = () => {
    const currentImgIndex = getCurrentImgIndex();

    const navigationDots = document.querySelectorAll('.item');
    let nextIndex;
    if (currentImgIndex > 0) {
        nextIndex = currentImgIndex - 1;
        setNewData(apartmentsDataArr[nextIndex]);
        navigationDots.item(currentImgIndex).style.backgroundColor = '#FFFFFF4D';
        navigationDots.item(nextIndex).style.backgroundColor = '#FFFFFF';
    }
    if (currentImgIndex === 0) {
        nextIndex = apartmentsDataArr.length - 1;
        setNewData(apartmentsDataArr[apartmentsDataArr.length - 1]);
        navigationDots.item(currentImgIndex).style.backgroundColor = '#FFFFFF4D';
        navigationDots.item(nextIndex).style.backgroundColor = '#FFFFFF';
    }
};

const setNewData = (data) => {
    document.querySelector('.parameters-city .parameters__text').textContent = data.city;
    document.querySelector('.parameters-apartment-area .parameters__text').textContent = data.area;
    document.querySelector('.parameters-repair-time .parameters__text').textContent = data.repairTime;
    document.querySelector('.apartment-photo').src = data.imgSrc;
};

document.querySelector('.navigation__next-arrow').addEventListener('click', displayNext);

document.querySelector('.navigation__prev-arrow').addEventListener('click', displayPrev);

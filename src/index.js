import './index.scss';

const cars = {
    kia : 2,
    toyata:4,
    suziki: 5
};
const mergeCars = {
    ...cars,
    tesla:3,
    ninja:6
}
console.log(cars);
console.log(mergeCars);
import React from "react";

const addZero = element => {
    if (Number.isInteger(element) && element < 10) {
        element = `0${element}`;
    }
    return element;
};

const ordinal = (index, unit) => {
    if (unit === "th") {
        let j = index % 10;
        let k = index % 100;

        if (j === 1 && k !== 11) {
            unit = "st";
        }
        if (j === 2 && k !== 12) {
            unit = "nd";
        }
        if (j === 3 && k !== 13) {
            unit = "rd";
        }
    }
    return unit;
};

const arrayGenerator = quantity => {
    let array = [];
    if (quantity === 60) {
        let i = 0;

        do {
            array.push(i);
            i += 1;
        } while (i < quantity);
    } else {
        let i = quantity;

        do {
            array.unshift(i);
            i -= 1;
        } while (i > 0);
    }
    return array;
};

const Elements = props => {
    const toCompare = props.toCompare;
    const type = props.type;
    const unit = props.unit;
    const elements = props.elements;
    const quantity = props.quantity;

    if (elements) {
        return (
            <div>
                {elements.map((element, index) => {
                    return (
                        <div
                            key={index}
                            className={`${type} item ${
                                index === toCompare ? "active" : ""
                            }`}
                            style={{
                                transform: `rotate(${index *
                                    (360 / elements.length) -
                                    (360 / elements.length) * toCompare}deg)`
                            }}
                        >
                            <p>{`${element}`}</p>
                        </div>
                    );
                })}
            </div>
        );
    } else if (quantity) {
        const array = arrayGenerator(quantity);

        return (
            <div>
                {array.map(index => {
                    return (
                        <div
                            key={index}
                            className={`${type} item ${
                                index === toCompare ? "active" : ""
                            }`}
                            style={{
                                transform: `rotate(${index * (360 / quantity) -
                                    (360 / quantity) * toCompare}deg)`
                            }}
                        >
                            <p>{`${addZero(index)} ${ordinal(index, unit)}`}</p>
                        </div>
                    );
                })}
            </div>
        );
    }

    return null;
};

export default Elements;

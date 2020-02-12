import React from "react";

const addZero = element => {
    if (Number.isInteger(element) && element < 10) {
        element = `0${element}`;
    }
    return element;
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
                            {`${element}`}
                        </div>
                    );
                })}
            </div>
        );
    } else if (quantity) {
        let i = quantity;
        let array = [];

        do {
            array.unshift(i);
            i -= 1;
        } while (i > 0);

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
                            {`${addZero(index)} ${unit}`}
                        </div>
                    );
                })}
            </div>
        );
    }

    return null;
};

export default Elements;

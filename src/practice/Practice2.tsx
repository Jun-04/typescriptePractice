export const Practice2 = () => {
    //write type for argument and return
    const getTotalFee = (num: number):number => {
        const total = num*1.1;
        return total
        };

    const onClickPractie = () =>{ 
        console.log(getTotalFee(1000))
    };

    return (
        <div>
            <p>Practice</p>
            <button onClick={onClickPractie}>click</button>
        </div>
    );
};
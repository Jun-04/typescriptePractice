export const Practice3 = () => {
    const getTotalFee = (num: number) => {
        const total = num*1.1;
        return total.toString();
        };

//you can write type of number after "total" so
//even number is returned as string, typescript points out the mistake below
    const onClickPractie = () =>{ 
        let total: number = 0;
        total = getTotalFee(1000);
        console.log(total);
    };

    return (
        <div>
            <p>Practice</p>
            <button onClick={onClickPractie}>click</button>
        </div>
    );
};
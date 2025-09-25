export const Practice = () => {
    const calcTotalFee = (num: number) => {
        const total = num*1.1;
        console.log(total);
    }

    //calcTotalFee should be number 
    // but js can take both 1000(number) and "1000"(string) and it can lead a bug
    const onClickPractie = () => calcTotalFee(1000);
    return (
        <div>
            <p>Practice</p>
            <button onClick={onClickPractie}>click</button>
        </div>
    );
};
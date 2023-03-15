import React from "react";

class HomePage{

    sobre: string;

    constructor(sobre: string){
        this.sobre = sobre;
    }
    toString(){
        return(
            <div>
                <h1>TESTANDO</h1>
            </div>
        );
    }
}

export default HomePage;
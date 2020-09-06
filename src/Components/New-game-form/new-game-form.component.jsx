import React from "react"
import Styles from "./new-game-form.module.scss";

//IMAGES
import Close from "../../Assets/icons/close.svg";

const NewGameForm = ({toggle}) =>{
    return(
        <div className={`${Styles.newGameForm}`}>
            <img onClick={toggle} src={Close} alt="close" className={Styles.closeBtn}/>
            <form className={Styles.form}>
                <div className={Styles.Row}>
                    <div className={Styles.inputContainer}>
                        <label htmlFor="" className={Styles.label}>Name</label>
                        <input type="text" className={Styles.input}/>
                    </div>
                    <div className={Styles.inputContainer}>
                        <label htmlFor="place of origin" className={Styles.label}>Gender</label>
                        <input placeholder="Up to you" type="text" name="place of origin" className={Styles.input}/>
                    </div>
                </div>
                
             
                
                <div className={Styles.Row}>
                    <div className={Styles.inputContainer}>
                        <label htmlFor="" className={Styles.label}>Likes</label>
                        <select name="traits" id="" className={Styles.input}>
                            <option value="Brave">Brave</option>
                        </select>
                    </div>
                    <div className={Styles.inputContainer}>
                        <label htmlFor="" className={Styles.label}>Fears</label>
                        <select name="traits" id="" className={Styles.input}>
                            <option value="Brave">Brave</option>
                        </select>
                    </div>
                </div>
                
                <div className={Styles.Row}>
                    <div className={Styles.inputContainer}>
                        <label htmlFor="traits" className={Styles.label}>Traits</label>
                        <select name="traits" id="" className={Styles.input}>
                            <option value="Brave"> 🕷 Brave</option>
                            <option value="Brave"> 🧙‍♀ Timid</option>
                            <option value="Brave">Careful</option>
                            <option value="Brave">Reckless</option>
                            <option value="Brave">Lucky</option>
                        </select>
                    </div>
                    
                    <div className={Styles.inputContainer}>
                        <label htmlFor="" className={Styles.label}>Trait 2</label>
                        <select name="traits" id="" className={Styles.input}>
                            <option value="Brave">Brave</option>
                        </select>
                    </div>
                    <div className={Styles.inputContainer}>
                        <label htmlFor="" className={Styles.label}>Trait 2</label>
                        <select name="traits" id="" className={Styles.input}>
                            <option value="Brave">Brave</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewGameForm;
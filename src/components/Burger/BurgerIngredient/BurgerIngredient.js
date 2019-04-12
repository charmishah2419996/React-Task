import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.css';
import './hi.css'; 

class BurgerIngredient extends Component {
    render () {
let ingredient = null;
        debugger
        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredient = <div className={classes.BreadBottom}>bottom</div>;
                break;
            case ( 'bread-top' ):
            ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}>seed1</div>
                        <div className={classes.Seeds2}>seed2</div>
                    </div>
                );
                break;
            case ( 'meat' ):
                ingredient = <div className={classes.Meat}>meat</div>;
                break;
            case ( 'cheese' ):
                ingredient = <div className={classes.Cheese}>cheese</div>;
                break;
            case ( 'bacon' ):
                ingredient = <div className={classes.Bacon}>bacon</div>;
                break;
            case ( 'salad' ):
            console.log("hi");
                ingredient = <div className={classes.Salad}>salad<div className="hi">hi</div></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;
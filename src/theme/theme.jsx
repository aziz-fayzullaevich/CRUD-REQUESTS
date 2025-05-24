import { Button, createTheme } from "@mantine/core";
import buttonClasses from '../theme/buttonClasses.module.css';

export const theme = createTheme({
    fontFamily: {
        Inter: ['Intern, sans-serif']
    },
    colors: {
        lightBlue: ['#228BE6', '#4263EB'],
    },
    components: {
        Button: Button.extend({
            defaultProps: {
                size: 'md',
                radius: 10
            },
            classNames: buttonClasses,
        })
    }

});
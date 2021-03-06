import Color from 'color';

let _colorTheme = {
    contentBackground: 'white',
    contentText: 'black',
    siteBackground: 'hsl(120, 86%, 23.7%)',
    primary: '#0dad0d',
    primaryText: 'white',
    secondary: '#2457D0',
    tertiary: 'white',
    tertiaryText: '#0dad0d',
    neutral: 'grey',
    warning: '#de4b21',
    lightPrimary: '#c4ffc4',
    primaryComplementary: 'rgb(137, 137, 137)',
    secondary: '#2457D0',
    lightSecondary: 'blue',
    background: 'rgb(244, 244, 244)',
    text: 'black',
    complementaryText: '#a1a1a1',
    hilightText: 'rgb(2, 157, 2)',
    primary500: 'hsl(120, 86% ,37%)',
    primary600: 'hsl(120, 86% ,30%)',
    primary700: 'hsl(120, 86% ,21%)',
    primary800: 'hsl(120, 86% ,14%)',
    primary900: 'hsl(120, 86% ,10%)',
}

function createAdvancedColorThemeObject(themeObject) {
    let newObj = {};
    let hslValues = {}
    let keys = Object.keys(themeObject);
    keys.forEach(key => {
        hslValues[key] = Color(themeObject[key]).hsl().color;
        newObj[key] = function (weight = 500) {
            if (typeof weight === 'object') {
                return themeObject[key];
            } else {
                let lightness = (((1000 - weight) / 1000) - 0.5) * 125;
                return `hsl(${hslValues[key][0]},${hslValues[key][1]}%,${hslValues[key][2] + lightness}%)`;
            }
        }
    })
    return newObj;
}

_colorTheme = createAdvancedColorThemeObject(_colorTheme);

let t = new Color();

t.lighten(0.2)
export const colorTheme = _colorTheme;
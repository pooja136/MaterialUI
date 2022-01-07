import { createTheme } from '@material-ui/core/styles';

//one Example for creating navi blue color as a variable which is common for all the site
//arcOrange is also one custom variable which we gave a color code repeatedly here
const arcBlue = '#0c72b9'; 

export default createTheme({
    palette:{
        common:{
            blue:`${arcBlue}`,
            arcOrange: '#FFBA60'
        },
        primary:{
            main: `${arcBlue}`
        },
        secondary:{
            main:'#FFBA60'
        }
    },
    typography:{
        // h3:{
        //     fontWeight: 400,
        //     fontSize:'2.2rem'
        // }
        tab: {
            fontWeight:700,
            textTransform: 'none',
            fontFamily:'Raleway',
            fontSize:'1rem',
        },
        estimateButton:{
            
            textTransform:'none',
            fontFamily: 'Pacifico',
            fontSize: '1rem',
            color:'#fff',
        }
    }
})
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    LogSignIn: {
        backdropFilter: 'blur(30px) saturate(500%)',
        '-webkit-backdrop-filter': 'blur(30px) saturate(500%)',
        boxShadow: '3px 3px 40px 18px rgb(0 0 0 / 20%)',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderRadius: '12px',
        border: '1px solid rgba(209, 213, 219, 0.3)',
        height: '500px',
        backgroundPosition: 'center'
    },
    grid: {
        padding: '5rem 4rem'
    },
    homeImg: {
        height: '400px',
        paddingTop: '2rem'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    formField: {
        paddingTop: '1rem',
        width: '80%'
    },
    actionButton: {
        width: '100%',
        textTransform: 'capitalize',
        fontWeight: '600'
    },
    divider: {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '20px',
        alignItems: 'center',
        color: '#777'
    },
    comLogo: {
        padding: '3px 10px'
    },
    submitBtn: {
        paddingBottom: '20px'
    }
})

export default useStyles;
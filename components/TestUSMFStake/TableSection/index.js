import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import StakeCard from './StakeCard'
import USMFTable from './USMFTable'

const useStyles = makeStyles({
    tableSection: {
        minHeight: 'calc(100vh - 198px)',
        backgroundColor: 'rgba(2,2,2,.85)',
        padding: '25px',
        flex: '1 1'
    }
})

const TableSecton = () => {
    const classes = useStyles()

    return (
        <Grid container item className={classes.tableSection} compoenent="section">
            <USMFTable />
            <StakeCard />
        </Grid>
    )
}

export default TableSecton

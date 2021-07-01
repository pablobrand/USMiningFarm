import { Dialog } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const StyledDialog = withStyles({
    paper: {
        borderRadius: 20,
        backgroundImage: 'linear-gradient(to right, #b43838, #b8374d, #b83b61, #b54175, #ae4a87)',
        width: 500
    }
})(Dialog)

export default StyledDialog

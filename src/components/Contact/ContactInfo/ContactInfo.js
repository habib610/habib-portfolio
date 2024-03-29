import {
    Box,
    Container,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { EmailOutlined } from "@material-ui/icons";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import React from "react";
const useStyles = makeStyles({
    root: {
        color: "white",
    },
    contactInfo: {
        marginBottom: "20px",
    },
});
const ContactInfo = () => {
    const classes = useStyles();
    return (
        <Container>
            <Grid item container md={12} className={classes.root}>
                <Grid
                    container
                    alignItems="center"
                    className={classes.contactInfo}
                    justifyContent="center"
                    item
                    md={12}
                >
                    <Grid item md={1}>
                        <LocationOnIcon style={{ color: "#fcee21" }} />
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h6">Dhaka 1234</Typography>
                        <Box>
                            <Typography variant="h6">Bangladesh</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    className={classes.contactInfo}
                    item
                    md={12}
                >
                    <Grid item md={1}>
                        <PhoneInTalkIcon style={{ color: "#fcee21" }} />
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h6">+8801955190797</Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    className={classes.contactInfo}
                    item
                    md={12}
                >
                    <Grid item md={1}>
                        <EmailOutlined style={{ color: "#fcee21" }} />
                    </Grid>
                    <Grid item md={6}>
                        <Typography variant="h6">
                            habib54562@gmail.com
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactInfo;

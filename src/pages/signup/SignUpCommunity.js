import React, { useState } from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Button,
    FormGroup,
    FormHelperText,
    Typography,
    Checkbox,
    FormControlLabel,
} from "@mui/material";

const UserTypeEnum = {
    senior: "Senior",
    community_helper: "Community Member",
};

const SignUpCommunity = ({ userType }) => {
    const [formData, setFormData] = useState({
        seniorName: "",
        seniorAddress: "",
        seniorPhone: "",
        seniorEmail: "",
        //for guardian, helper and not senior
        name: "",
        // birthday: "",
        phone: "",
        city: "",
        email: "",
        // password: "",
        // consentForm: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const renderFormFields = () => {
        switch (userType) {
            case "senior":
                return (
                    <>
                        <TextField
                            label="Guardian Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Guardian Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Guardian Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />

                        <TextField
                            label="Senior's Name"
                            name="seniorName"
                            value={formData.seniorName}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Senior's Address"
                            name="seniorAddress"
                            value={formData.seniorAddress}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Senior's Phone"
                            name="seniorPhone"
                            value={formData.seniorPhone}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Senior's Email"
                            name="seniorEmail"
                            value={formData.seniorEmail}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        {/* <TextField
                            label="Guardian's Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Guardian's Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        /> */}
                    </>
                );
            case "community_helper":
                return (
                    <>
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="City"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            label="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        {/* <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        /> */}
                    </>
                );
            default:
                return (
                    <>
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Birthday"
                            name="birthday"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value={formData.birthday}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                    </>
                );
        }
    };

    return (
        <>
            <Typography
                style={{
                    marginBottom: "50px",
                    textAlign: "center",
                    fontSize: "30px",
                }}
            >
                {UserTypeEnum[userType]} Registration Form
            </Typography>

            <FormControl fullWidth>
                <FormGroup>
                    <InputLabel id="user-type-label" shrink disabled>
                        User Type
                    </InputLabel>
                    <Select
                        labelId="user-type-label"
                        id="user-type-select"
                        value={userType}
                        label="User Type"
                        fullWidth
                        margin="normal"
                        disabled
                    >
                        <MenuItem value="guardian">Guardian</MenuItem>
                        <MenuItem value="community_helper">
                            Community Helper
                        </MenuItem>
                        <MenuItem value="senior">Senior</MenuItem>
                    </Select>
                    {renderFormFields()}
                    <FormControlLabel
                        required
                        control={<Checkbox />}
                        label="Do you agree to our terms of service?"
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: 20 }}
                        type="submit"
                    >
                        Submit
                    </Button>
                </FormGroup>
            </FormControl>
        </>
    );
};

export default SignUpCommunity;
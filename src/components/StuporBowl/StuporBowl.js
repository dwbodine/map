import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import './StuporBowl.css';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

export default function StuporBowl () {
    const [q1, setq1] = useState("yes");
    const [q2, setq2] = useState("yes");
    const [q3, setq3] = useState("less");
    const [q4, setq4] = useState("neither");
    const [q5, setq5] = useState("yes");
    const [q6, setq6] = useState("yes");
    const [q7, setq7] = useState("yes");
    const [q8, setq8] = useState("yes");
    const [q9, setq9] = useState("yes");
    const [q10, setq10] = useState("less");
    const [q11, setq11] = useState("exactly");
    const [q12, setq12] = useState("heads");
    const [q13, setq13] = useState("chiefs");
    const [q14, setq14] = useState("chiefs");
    const [q15, setq15] = useState("chiefs");
    const [q16, setq16] = useState("chiefs");
    const [q17, setq17] = useState("chiefs");
    const [q18, setq18] = useState("neither");
    const [q19, setq19] = useState("less");
    const [q20, setq20] = useState("less");
    const [q21, setq21] = useState("other");
    const [q22, setq22] = useState("none");
    const [q23, setq23] = useState("less");
    const [q24, setq24] = useState("yes");
    const [q25, setq25] = useState("yes");
    const [q26, setq26] = useState("yes");
    const [q27, setq27] = useState("yes");
    const [q28, setq28] = useState("less");
    const [q29, setq29] = useState("yes");
    const [q30, setq30] = useState("qb");
    const [q31, setq31] = useState("yes");
    const [q32, setq32] = useState("less");
    const [q33, setq33] = useState("chiefs");
    const [q34, setq34] = useState("other");
    const [q35, setq35] = useState("fluff");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const isEmail = (search) => {
        const regexp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
        return regexp.test(search);
    };

    const notify = (message) => toast(message);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isEmail(email)) {
            notify('Please enter a valid email');
            return false;
        }

        const answers = {
            firstName,
            lastName,
            email,
            q1,
            q2,
            q3,
            q4,
            q5,
            q6,
            q7,
            q8,
            q9,
            q10,
            q11,
            q12,
            q13,
            q14,
            q15,
            q16,
            q17,
            q18,
            q19,
            q20,
            q21,
            q22,
            q23,
            q24,
            q25,
            q26,
            q27,
            q28,
            q29,
            q30,
            q31,
            q32,
            q33,
            q34,
            q35
        };

        const headers = {
            'x-api-key': 'nyGpM0.DG4ODMo33G6mRVnJFf6LWb5UQAWBt-c33ecTR6EeojA2v',
            'Content-Type': 'application/json'
        };

        const data = {
            answers: JSON.stringify(answers)
        };

        axios.post('https://api.national-acts.com/internal/stuporbowl', data, { headers })
            .then(response => notify('Sent successfully'));
    };

    document.title = 'Stupor Bowl LVIII (2024)';
    return (
        <div className="stupor">
            <h1 className="entry-title">Stupor Bowl LVIII Bets (2024)</h1>

            <form onSubmit={handleSubmit}>
                <div className="entry-content">
                    <ol>
                        <li>
                            <FormControl>
                                <FormLabel id="label1">Will Reba McEntire mess
                                    up a word in the National Anthem? (5 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq1(e.target.value)}
                                    aria-labelledby="label1"
                                    defaultValue="yes"
                                    name="question1"
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label2">Will the National Anthem be
                                 over in less than 2:05?  (15 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq2(e.target.value)}
                                    aria-labelledby="label2"
                                    defaultValue="yes"
                                    name="question2"
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label3">Length of the final
                                    word "Brave" in seconds?  (5 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq3(e.target.value)}
                                    aria-labelledby="label3"
                                    defaultValue="less"
                                    name="question3"
                                >
                                    <FormControlLabel value="less" control={<Radio />} label="Less than 5" />
                                    <FormControlLabel value="more" control={<Radio />} label="5 or more" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label4">Which coach gets shown
                                 first during the Anthem? (5 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq4(e.target.value)}
                                    aria-labelledby="label4"
                                    defaultValue="neither"
                                    name="question4"
                                >
                                    <FormControlLabel value="chiefs" control={<Radio />} label="Chiefs" />
                                    <FormControlLabel value="49ers" control={<Radio />} label="49ers" />
                                    <FormControlLabel value="neither" control={<Radio />} label="Neither" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label5">Will Jeremy Renner be shown
                                 on camera at the game? (5 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq5(e.target.value)}
                                    aria-labelledby="label5"
                                    defaultValue="yes"
                                    name="question5"
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label6">Will Julia Roberts be shown
                                 on camera at the game? (5 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq6(e.target.value)}
                                    aria-labelledby="label6"
                                    defaultValue="yes"
                                    name="question6"
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label7">Will Paul Rudd be shown
                                 on camera at the game?  (5 pts)  </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq7(e.target.value)}
                                    aria-labelledby="label7"
                                    defaultValue="yes"
                                    name="question7"
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label8">Will Jason Sudeikis be shown
                                 on camera at the game?  (5 pts)</FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq8(e.target.value)}
                                    aria-labelledby="label8"
                                    defaultValue="yes"
                                    name="question8"
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label9">Will the Sphere be shown
                                 on TV between 6 PM EST (3 PM PST) and kickoff? (15 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq9(e.target.value)}
                                    aria-labelledby="label9"
                                    defaultValue="yes"
                                    name="question9"
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label10">How many times will Taylor Swift
                                 be shown on TV before halftime? (25 pts)</FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq10(e.target.value)}
                                    aria-labelledby="label10"
                                    defaultValue="less"
                                    name="question10"
                                >
                                    <FormControlLabel value="less" control={<Radio />} label="Less than 3" />
                                    <FormControlLabel value="more" control={<Radio />} label="3 or more" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label11">Will the game start before
                                 or after 6:30 PM EST (3:30 PM PST)? (20 pts)  </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq11(e.target.value)}
                                    aria-labelledby="label11"
                                    defaultValue="exactly"
                                    name="question11"
                                >
                                    <FormControlLabel value="before" control={<Radio />} label="Before" />
                                    <FormControlLabel value="after" control={<Radio />} label="After" />
                                    <FormControlLabel value="exactly" control={<Radio />} label="Exactly" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label12">Will the coin toss
                                 be heads or tails? (5 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq12(e.target.value)}
                                    aria-labelledby="label12"
                                    defaultValue="heads"
                                    name="question12"
                                >
                                    <FormControlLabel value="heads" control={<Radio />} label="Heads" />
                                    <FormControlLabel value="tails" control={<Radio />} label="Tails" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label13">Who wins the coin toss? (5 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq13(e.target.value)}
                                    aria-labelledby="label13"
                                    defaultValue="chiefs"
                                    name="question13"
                                >
                                    <FormControlLabel value="chiefs" control={<Radio />} label="Chiefs" />
                                    <FormControlLabel value="49ers" control={<Radio />} label="49ers" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label14">Who will kick off first? (5 pts)</FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq14(e.target.value)}
                                    aria-labelledby="label14"
                                    defaultValue="chiefs"
                                    name="question14"
                                >
                                    <FormControlLabel value="chiefs" control={<Radio />} label="Chiefs" />
                                    <FormControlLabel value="49ers" control={<Radio />} label="49ers" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label15">Who will score first? (5 pts)</FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq15(e.target.value)}
                                    aria-labelledby="label15"
                                    defaultValue="chiefs"
                                    name="question15"
                                >
                                    <FormControlLabel value="chiefs" control={<Radio />} label="Chiefs" />
                                    <FormControlLabel value="49ers" control={<Radio />} label="49ers" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label16">Who will score a TD first?  (5 pts)</FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq16(e.target.value)}
                                    aria-labelledby="label16"
                                    defaultValue="chiefs"
                                    name="question16"
                                >
                                    <FormControlLabel value="chiefs" control={<Radio />} label="Chiefs" />
                                    <FormControlLabel value="49ers" control={<Radio />} label="49ers" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label17">Which kicker will score
                                 first (FG or extra point)?   (2 pts)</FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq17(e.target.value)}
                                    aria-labelledby="label17"
                                    defaultValue="chiefs"
                                    name="question17"
                                >
                                    <FormControlLabel value="chiefs" control={<Radio />} label="Chiefs" />
                                    <FormControlLabel value="49ers" control={<Radio />} label="49ers" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label18">Who will throw an interception first? (5 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq18(e.target.value)}
                                    aria-labelledby="label18"
                                    defaultValue="neither"
                                    name="question18"
                                >
                                    <FormControlLabel value="chiefs" control={<Radio />} label="Chiefs" />
                                    <FormControlLabel value="49ers" control={<Radio />} label="49ers" />
                                    <FormControlLabel value="neither" control={<Radio />} label="Neither" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label19">How many commercials between
                                 kickoff and the halftime show? (25 pts)</FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq19(e.target.value)}
                                    aria-labelledby="label19"
                                    defaultValue="less"
                                    name="question19"
                                >
                                    <FormControlLabel value="less" control={<Radio />} label="Less than 50" />
                                    <FormControlLabel value="more" control={<Radio />} label="50 or more" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label20">How many of those will
                                 be car commercials? (10 pts)</FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq20(e.target.value)}
                                    aria-labelledby="label20"
                                    defaultValue="less"
                                    name="question20"
                                >
                                    <FormControlLabel value="less" control={<Radio />} label="Less than 5" />
                                    <FormControlLabel value="more" control={<Radio />} label="5 or more" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label21">Color of the first Doritos
                                 bag in commercials? (15 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq21(e.target.value)}
                                    aria-labelledby="label21"
                                    defaultValue="other"
                                    name="question21"
                                >
                                    <FormControlLabel value="red" control={<Radio />} label="Red" />
                                    <FormControlLabel value="blue" control={<Radio />} label="Blue" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label22">What type of jacket will Usher first
                                 be wearing?  (15 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq22(e.target.value)}
                                    aria-labelledby="label22"
                                    defaultValue="none"
                                    name="question22"
                                >
                                    <FormControlLabel value="suit" control={<Radio />} label="Suit jacket" />
                                    <FormControlLabel value="leather" control={<Radio />} label="Lether jacket" />
                                    <FormControlLabel value="none" control={<Radio />} label="No Jacket" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label23">Total number of songs
                                 in the halftime show (including partial songs)? (5 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq23(e.target.value)}
                                    aria-labelledby="label23"
                                    defaultValue="less"
                                    name="question23"
                                >
                                    <FormControlLabel value="less" control={<Radio />} label="Less than 8" />
                                    <FormControlLabel value="more" control={<Radio />} label="8 or more" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label24">Will Usher wear those huge
                                 sunglasses onstage?  (5 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq24(e.target.value)}
                                    aria-labelledby="label24"
                                    defaultValue="yes"
                                    name="question24"
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label25">Will Jay-Z make a guest appearance? (15 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq25(e.target.value)}
                                    aria-labelledby="label25"
                                    defaultValue="yes"
                                    name="question25"
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label26">Will Alicia Keys make
                                 a guest appearance? (15 pts)</FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq26(e.target.value)}
                                    aria-labelledby="label26"
                                    defaultValue="yes"
                                    name="question26"
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label27">Will there be a wardrobe
                                 malfunction (accidental or deliberate)?  (15 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq27(e.target.value)}
                                    aria-labelledby="label27"
                                    defaultValue="yes"
                                    name="question27"
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label28">How long will the
                                 halftime show last?   (5 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq28(e.target.value)}
                                    aria-labelledby="label28"
                                    defaultValue="less"
                                    name="question28"
                                >
                                    <FormControlLabel value="less" control={<Radio />} label="Less than 12 minutes" />
                                    <FormControlLabel value="more" control={<Radio />} label="12 minutes or more" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label29">Will the game go into
                                 overtime? (10 pts)  </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq29(e.target.value)}
                                    aria-labelledby="label29"
                                    defaultValue="yes"
                                    name="question29"
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label30">What position wins MVP on
                                 the winning team?  (5 pts)  </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq30(e.target.value)}
                                    aria-labelledby="label30"
                                    defaultValue="qb"
                                    name="question30"
                                >
                                    <FormControlLabel value="qb" control={<Radio />} label="Quarterback" />
                                    <FormControlLabel value="of" control={<Radio />} label="Other offensive player" />
                                    <FormControlLabel value="de" control={<Radio />} label="Other defensive player" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label31">Will some idiot run on
                                 the field during the game?   (10 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq31(e.target.value)}
                                    aria-labelledby="label31"
                                    defaultValue="yes"
                                    name="question31"
                                >
                                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="no" control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label32">What will the combined
                                 score be?  (2 pts)    </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq32(e.target.value)}
                                    aria-labelledby="label32"
                                    defaultValue="less"
                                    name="question32"
                                >
                                    <FormControlLabel value="less" control={<Radio />} label="Less than 60 points" />
                                    <FormControlLabel value="more" control={<Radio />} label="60 points or more" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label33">Who will have the
                                 most penalties?   (5 pts) </FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq33(e.target.value)}
                                    aria-labelledby="label33"
                                    defaultValue="chiefs"
                                    name="question33"
                                >
                                    <FormControlLabel value="chiefs" control={<Radio />} label="Chiefs" />
                                    <FormControlLabel value="49ers" control={<Radio />} label="49ers" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label34">What color will the liquid be that
                                 they pour on the winning coach? (15 pts)</FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq34(e.target.value)}
                                    aria-labelledby="label34"
                                    defaultValue="other"
                                    name="question34"
                                >
                                    <FormControlLabel value="green" control={<Radio />} label="Lime/Green/Yellow" />
                                    <FormControlLabel value="orange" control={<Radio />} label="Orange" />
                                    <FormControlLabel value="blue" control={<Radio />} label="Blue" />
                                    <FormControlLabel value="red" control={<Radio />} label="Red" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other/Won't be Shown" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                        <li>
                            <FormControl>
                                <FormLabel id="label35">Who wins Puppy Bowl 2024
                                 on Animal Planet? (35 pts)</FormLabel>
                                <RadioGroup
                                    required
                                    onChange={e => setq35(e.target.value)}
                                    aria-labelledby="label35"
                                    defaultValue="fluff"
                                    name="question35"
                                >
                                    <FormControlLabel value="fluff" control={<Radio />} label="Team Fluff" />
                                    <FormControlLabel value="ruff" control={<Radio />} label="Team Ruff" />
                                </RadioGroup>
                            </FormControl>
                        </li>
                    </ol>
                    <div>
                        <TextField name="firstName" required helperText="First Name (required)"
                            variant="outlined" onChange={e => setFirstName(e.target.value)} />
                        <TextField name="lastName" required helperText="First Letter of Last Name (required)"
                            variant="outlined" onChange={e => setLastName(e.target.value)}
                            inputProps={{ maxLength: 1 }} />
                    </div>
                    <div>
                        <TextField name="email" type="email" required helperText="Email (required)"
                            variant="outlined" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <Button type="submit">Submit</Button>
                </div>
                <Toaster />
            </form>
        </div>
    );
}

import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import './StuporBowlResults.css';

import axios from 'axios';

export default function StuporBowlResults () {
    document.title = 'Stupor Bowl LVIII (2024)';
    return (
        <div className="stupor">
            <h1 className="entry-title">Stupor Bowl LVIII Bets (2024)</h1>

            <div className="entry-content">
                &nbsp;
            </div>
        </div>
    );
}

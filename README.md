# eArtReplicas

2023 (dummy) version of http://www.e-artreplicas.com/

Uses react-bootstrap.
To reduce clutter due to there being many of them, routes were put in index.js instead of App.js as most do.
(NB. As we're using react-bootstrap in Header component, we need react-router-bootstrap to use LinkContainer with bootstrap elements (the equivalent of Link substituting href ))

Wih server, we used ES syntax instead of commonjs, so added "type": "module" to package.json.
-> eg import express from 'express'; instead of const express = require('express');

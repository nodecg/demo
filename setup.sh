#!/usr/bin/env bash
git clone https://github.com/nodecg/nodecg.git
cd nodecg
npm i --production
cd bundles
git clone https://github.com/EwanLyon/tutorial-bundle.git
cd tutorial-bundle
npm i --production

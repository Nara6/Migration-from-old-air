#! /bin/bash

CHAT_ID="-1001704412930"
BOT_TOKEN=5134311053:AAFc4vy-aRICsb7HRFOflGgsgn8mspJWD6o


# HASH=$(git log -n 1 |grep commit)
# AUTHOR=$(git show $HASH | grep Author)
# MESSAGE=$(git show -s --format=%s)
Log=$(git log -n 1 --pretty=format:"<b>COMMITER</b>: %cN %n<b>DATE</b>: %ci %n<b>MESSAGE</b>: %s")

MSG="<b>PROJECT</b>: VR SYSTEM%0A<b>APPLICATION</b>: WEB%0A<b>STATUS</b>: Success%0A<b>VERSION</b>: ${BUILD_NUMBER}%0A${Log}<b>Server</b>: DevAP-01%0A<b>Local IP</b>: 172.19.24.33%0A<b>Sub Domain</b>: <a href="https:dev-api-bank.mpwt.gov.kh">dev-api-bank.mpwt.gov.kh</a>"


# echo "$MSG"

if [ -z "${Log}" ]; then
    echo "String is empty"
    else
    curl -s -X POST https://api.telegram.org/bot${BOT_TOKEN}/sendMessage -d chat_id=${CHAT_ID} -d text="${MSG}" -d parse_mode="HTML"
fi
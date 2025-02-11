#!/usr/bin/env bash

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

# usage: sh remoteFileCompare <file_path>
# copy the filepath on git as parameter to run the script

DEV_STATIC_URL=https://static.devfdg.net
# AC
# \s = space
PROD_STATIC_URL=https://static.anchoredcoins.com
DANGEROUS_WORDS="first\sdigital|fdusd|firstdigital|fd121|fdt"

#FDT
# \s = space
# PROD_STATIC_URL=https://static.app.firstdigitallabs.com
# DANGEROUS_WORDS="anchor|\sac\s|aeur|achf"


FILE_PATH=$(echo "$1" | sed 's/^stablecoin\///')
file1="temp/file1From_dev"
file2="temp/file2From_prod"
rm $file1
rm $file2
echo loading ${DEV_STATIC_URL}/${FILE_PATH}
curl ${DEV_STATIC_URL}/${FILE_PATH} > $file1
echo loading ${PROD_STATIC_URL}/${FILE_PATH}
curl ${PROD_STATIC_URL}/${FILE_PATH} > $file2
echo "${RED}checking whether two files are identical or not${NC}"
result=$(diff "$file1" "$file2")
if [[ $result = "" ]]; then
  echo "${GREEN}pass, two files are identical${NC}"
else
  echo $result
fi
echo "${RED}check whether dangerous word exist or not${NC}"
grep -iE $DANGEROUS_WORDS $file1
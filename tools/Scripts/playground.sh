file1="temp/dev18nTemp1"
file2="temp/prod18nTemp1"

result=$(diff "$file1" "$file2")

echo $result

if [[ $result = "" ]]; then
  echo "pass"
fi

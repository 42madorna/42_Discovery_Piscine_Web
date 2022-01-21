ls | wc -l | awk '{$1=$1}1' OFS=""

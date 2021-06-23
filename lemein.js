var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += "Hello";
}
console.log(msg);

/*output is hi.its because var lemeout is numerical 0 so that lemeout if block not executed.
on the other hand var lemein is string 0 ("0") for which if block is successful./*
const openTimeDiv = document.createElement('div');
openTimeDiv.classList.add('open-time');

const heading = document.createElement('h1');
heading.textContent = 'Open Time';
openTimeDiv.appendChild(heading);

const table = document.createElement('table');
table.innerHTML = `
<tr>
    <td>Sunday</td>
    <td>8:30am to 11:30pm</td>
</tr>
<tr>
    <td>Monday</td>
    <td>7:30am to 10:30pm</td>
</tr>
<tr>
    <td>Tuesday</td>
    <td>7:30am to 10:30pm</td>
</tr>
<tr>
    <td>Wednesday</td>
    <td>7:30am to 10:30pm</td>
</tr>
<tr>
    <td>Thursday</td>
    <td>7:30am to 10:30pm</td>
</tr>
<tr>
    <td>Friday</td>
    <td>7:30am to 10:30pm</td>
</tr>
<tr>
    <td>Saturday</td>
    <td>8:30am to 11:30pm</td>
</tr>
`

openTimeDiv.appendChild(table);

export default openTimeDiv;
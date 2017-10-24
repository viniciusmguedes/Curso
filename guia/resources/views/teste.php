<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<form id="form">
    <input type="text" name="name" value="Vini">
    <input type="text" name="description" value="Melhor Wiski da região">
    <input type="file" name="photo" id="file">
</form>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script type="text/javascript">
    $('#file').on('change', function () {
        let formData = new FormData();
        formData.append('name', 'Vini');
        formData.append('description', 'Melhor Wiski da região');
        formData.append('photo', $('#file')[0].files[0]);
        let headers = {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBkOTllYzVlMDJiNmUzODE2ZGY4ODg1YzRhN2JlMTU4MDY4M2IxODlhNTllNTg5NmZlOGExY2YxYTZlNjQ1ZWUwYmMzMWJkNDQ2ZDRjOTYyIn0.eyJhdWQiOiIzIiwianRpIjoiMGQ5OWVjNWUwMmI2ZTM4MTZkZjg4ODVjNGE3YmUxNTgwNjgzYjE4OWE1OWU1ODk2ZmU4YTFjZjFhNmU2NDVlZTBiYzMxYmQ0NDZkNGM5NjIiLCJpYXQiOjE1MDgzODYxMTYsIm5iZiI6MTUwODM4NjExNiwiZXhwIjoxNTM5OTIyMTE2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.NWk-VKsKSLV0WZeuCxmIhp7PFG0ZDhYLhLHQHGSRnIlmUpeqXt5eRnHPZh5pCoz0nNs-VY4raNmGiPeLNgVGC17khP7vW81Em51JFTGGP1tu_RCZWjVcGFkMCoJJ1umvNYn7EvyoBOS1OYupDyyjTni_haGM0d_8MC1Hf1kJSJJZvXwwmX8_dEk3i_TizZZnb1_WitV2cN230k3iKnVto3CLATd58-sFCmiyw59pCbuou6c6kTUAJ_iwcuwKL9Q6Ama2Hohim0DT4J95aiigxsmeGxqu0ownRCAiiReLtxJmPFb1llE1kuYBJkq98mHzf4DAv44UE_FCifuYpRrSA2ll7yu3AoiRN8xLx8HlOrBYPo6CrjcOHYiWIRd-VgPWjWA3VdGxAN5PlKYWyAGEseu92NXwRsM7vYA58AQ7HQbPhwrOwWag_k_zMHNZdGBwNGfOuvld7v_f6Y53EX0UqYl68zSubrxdM_41-RUW3L-G30EeJblnSP-dvvxhpPTAKM2Z3e4Rhjn-SibQjAcmELpYTaSyu4qS_Jvn4Lc6_VOMn3Fy7Q5idPpaIcLM4WU0KKWhBnWUvB9MHkujNdaXvk3KnAP9lIVvvz6D9xo0wIZqnMhykar_-_iKLIYRbruepIYNRubSzsuZThz8_8uBm9wbz-Bw4sVxtowivNkauYI',
            //'content-type': 'multipart/form-data'
            'content-type': 'application/x-www-form-urlencoded'
        }
        axios.post('http://localhost:8000/api/v1/restaurants/3', formData, {headers: headers})
    })
</script>
</body>
</html>
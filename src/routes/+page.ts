export const load = (async () => {
    let stream_data = await fetch('https://www.destiny.gg/api/info/stream').then(response => response.json()).then(data => { return data.data }).catch(err => { console.log(err) });

    return {
        stream_data
    }
})
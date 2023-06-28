<script lang="ts">
    import { page } from '$app/stores';
	import type { PageData } from './$types';
    export let data: PageData;
    
    let src_url = "";
    let stream_data = data.stream_data;
    let embed = $page.url.href.split('#').slice(1).join('#').split('/');

    let youtubeURL = "https://www.youtube.com/embed/REPLACEME?autoplay=1&amp;playsinline=1&amp;start=";
    let kickURL = "https://player.kick.com/REPLACEME?autoplay=true"
    let twitchURL = "https://player.twitch.tv/?channel=REPLACEME&amp;parent=www.destiny.gg&amp;parent=stage.destiny.gg"
    
    if(embed[0] == 'youtube') {
        src_url = youtubeURL.replace('REPLACEME', embed[1]);
    } else if(embed[0] == 'kick') {
        src_url = kickURL.replace('REPLACEME', embed[1]);
    } else if(embed[0] == 'twitch') {
        src_url = twitchURL.replace('REPLACEME', embed[1]);
    } else {
        if(stream_data) {
            if(stream_data.streams.youtube && stream_data.streams.youtube.id) {
                src_url = youtubeURL.replace('REPLACEME', stream_data.streams.youtube.id);
            } else if(stream_data.streams.kick && stream_data.streams.kick.id) {
                src_url = kickURL.replace('REPLACEME',stream_data.streams.kick.id);
            } else if(stream_data.streams.twitch && stream_data.streams.twitch.id) {
                src_url = twitchURL.replace('REPLACEME', stream_data.streams.twitch.id);
            } else {
                src_url = youtubeURL.replace('REPLACEME', 'dQw4w9WgXcQ');
            }
        } else {
            src_url = youtubeURL.replace('REPLACEME', 'dQw4w9WgXcQ');
        }
    }
</script>

<div class="flex h-full">
	<iframe
		class="grow"
		allow="fullscreen; autoplay; encrypted-media; picture-in-picture; web-share"
		src={src_url}
		title="Stream embed"
	/>
	<iframe
        id="dgg-chat"
		src="https://www.destiny.gg/embed/chat"
		title="DGG Chat"
		class="h-full"
	/>
</div>

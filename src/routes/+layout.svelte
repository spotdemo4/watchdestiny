<script>
	import '../app.css';
</script>

<div class="flex items-center bg-zinc-900 py-2 px-2 text-zinc-400 gap-4">
	<a href="https://www.destiny.gg/" target="_blank" rel="noopener noreferrer" class="mr-2">
		<img src="dgg-logo.svg" alt="dgg logo" height="100px" width="100px" />
	</a>
	<a
		href="https://www.destiny.gg/youtube"
		target="_blank"
		rel="noopener noreferrer"
		class="hover:text-zinc-300">Youtube</a
	>
	<a
		href="https://www.destiny.gg/instagram"
		target="_blank"
		rel="noopener noreferrer"
		class="hover:text-zinc-300">Instagram</a
	>
	<a
		href="https://www.destiny.gg/reddit"
		target="_blank"
		rel="noopener noreferrer"
		class="hover:text-zinc-300">Reddit</a
	>
	<a
		href="https://www.destiny.gg/twitter"
		target="_blank"
		rel="noopener noreferrer"
		class="hover:text-zinc-300">Twitter</a
	>
	<a
		href="https://rumble.com/Destiny"
		target="_blank"
		rel="noopener noreferrer"
		class="hover:text-zinc-300">Rumble</a
	>
	<a
		href="https://kick.com/destiny"
		target="_blank"
		rel="noopener noreferrer"
		class="hover:text-zinc-300">Kick</a
	>
	<a
		href="https://www.destiny.gg/positions"
		target="_blank"
		rel="noopener noreferrer"
		class="hover:text-zinc-300">Positions</a
	>
	<a
		href="https://www.destiny.gg/discord"
		target="_blank"
		rel="noopener noreferrer"
		class="hover:text-zinc-300">Discord</a
	>
	<a
		href="https://www.destiny.gg/donate"
		target="_blank"
		rel="noopener noreferrer"
		class="hover:text-zinc-300">Donate</a
	>
	<a
		href="https://www.destiny.gg/subscribe"
		target="_blank"
		rel="noopener noreferrer"
		class="text-white bg-blue-500 rounded-lg px-0.5">Subscribe</a
	>
	<a
		href="https://www.destiny.gg/shop"
		target="_blank"
		rel="noopener noreferrer"
		class="hover:text-zinc-300">Store</a
	>

	<a
		href="/"
		class="ml-auto hover:text-zinc-300 flex gap-1"
		target="_blank"
		rel="noopener noreferrer"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
			/>
		</svg>
		Big screen</a
	>
	<a
		href="https://www.destiny.gg/login"
		target="_blank"
		rel="noopener noreferrer"
		class="hover:text-zinc-300 flex gap-1 mr-2"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
			/>
		</svg>
		Sign In</a
	>
</div>

<div class="mx-auto h-[calc(100vh-47px)] bg-zinc-950">
	<slot />
</div>

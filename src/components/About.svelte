<script>
	import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
	import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
	import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
	import Icon from './Icon.svelte';

	export let name;
	export let photo;
	export let email;
	export let phone;
	export let socials;

	const icons = {
		twitter: faTwitter,
		linkedin: faLinkedin,
		github: faGithub
	};
</script>

<style>

</style>

<section>
	<header>
		<h1>About</h1>
	</header>
	<img src={photo} alt={`Photo about ${name}`} />
	{#if socials}
		<ul aria-label="Social network links">
			{#each Object.keys(socials) as social}
				<li>
					<a href={socials[social]} target="about:blank">
						<Icon icon={icons[social]} />
						<span class="visible-hidden">{social} account</span>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
	<address>
		<a href={`mailto:${email}`}>{email}</a>
		<a href={`tel:${phone}`}>{phone}</a>
	</address>
	<slot />
</section>

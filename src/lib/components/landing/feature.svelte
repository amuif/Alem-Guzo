<script>
	import { LibraryBig} from "@lucide/svelte";

</script>

<div class="bg-primary text-black pb-5" id="about">
	<div class="mx-auto min-h-[80dvh]  p-7 w-full flex-col bg-white  py-10 md:max-w-7xl rounded-3xl shadow-xl/30">
		<div class="grid grid-cols-1 md:grid-cols-2">
			<div class=" text-3xl font-bold lg:text-5xl">
				<p class="text-left">
					About<br /> Alem Guzo
				</p>
			</div>
			<p class="text-lg">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi voluptatem quidem dolores,
				iusto magnam ipsam autem illo, at et amet libero voluptates, aliquid architecto deleniti
				aperiam similique saepe itaque provident?
			</p>
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-3 pt-5 lg:pt-10  bg-blue-500 mt-auto">
      <div>
        <LibraryBig class='h-16 w-16 text-primary'/>
        <h1>Massive Book Library</h1>
      </div>
      <div></div>
      <div></div>
		</div>
	</div>
</div>

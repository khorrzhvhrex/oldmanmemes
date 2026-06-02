console.log("App loaded");

async function testTags() {

    const { data, error } =
        await window.supabaseClient
            .from("tags")
            .select("*");

    console.log("DATA:", data);
    console.log("ERROR:", error);

}

testTags();

.PHONY: generate lint breaking clean tools

tools:
	cd tools && pnpm install

generate: tools
	buf generate

lint:
	buf lint

breaking:
	buf breaking --against '.git#branch=main'

clean:
	rm -rf gen/go gen/ts/src gen/dart/lib/quick

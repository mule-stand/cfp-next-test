cli:
	docker compose run --rm node-cli sh


build:
	docker compose run --rm node-cli pnpm run build

dev:
	docker compose up dev

prod: build
	docker compose up prod

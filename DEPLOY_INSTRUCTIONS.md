# 🚀 Instruções de Deploy - Mood Motel Landing Page

## 📋 Pré-requisitos

### 1. Configurar Secrets no GitHub

Vá em **Settings → Secrets and variables → Actions** do seu repositório e adicione:

- `SSH_HOST`: IP do seu servidor VPS (ex: `157.230.165.143`)
- `SSH_USER`: usuário SSH (ex: `root`)
- `SSH_PRIVATE_KEY`: chave privada SSH (conteúdo do arquivo `~/.ssh/id_rsa`)
- `SSH_PORT`: porta SSH (opcional, padrão: `22`)

### 2. Preparar o Servidor VPS

SSH no seu servidor e execute:

```bash
# Criar diretório para a stack
mkdir -p /opt/stacks/mood
cd /opt/stacks/mood

# Fazer upload do docker-compose.mood.yml
# Você pode usar scp ou copiar o conteúdo manualmente
```

**Opção 1 - Upload via SCP (do seu computador local):**
```bash
scp docker-compose.mood.yml root@157.230.165.143:/opt/stacks/mood/
```

**Opção 2 - Criar manualmente no servidor:**
```bash
nano /opt/stacks/mood/docker-compose.mood.yml
# Cole o conteúdo e salve (Ctrl+X, Y, Enter)
```

### 3. Habilitar GitHub Container Registry

O workflow já está configurado para usar o GitHub Container Registry (ghcr.io).

**Importante:** Certifique-se de que o repositório tem permissão para criar packages:
- Vá em **Settings → Actions → General**
- Em **Workflow permissions**, selecione **Read and write permissions**
- Salve

## 🎯 Como Funciona

### Deploy Automático

Toda vez que você fizer um **commit na branch `main`**, o GitHub Actions irá:

1. ✅ Fazer build da imagem Docker da aplicação Next.js
2. ✅ Publicar a imagem no GitHub Container Registry (ghcr.io)
3. ✅ Conectar no servidor via SSH
4. ✅ Fazer pull da nova imagem
5. ✅ Atualizar o stack no Docker Swarm
6. ✅ Traefik automaticamente redireciona o tráfego para os novos containers

### Deploy Manual

Você também pode disparar o deploy manualmente:

1. Vá em **Actions** no GitHub
2. Selecione o workflow **Deploy Mood Motel**
3. Clique em **Run workflow**
4. Selecione a branch `main`
5. Clique em **Run workflow**

## 🌐 DNS Configuration

No GoDaddy (ou seu provedor DNS), configure:

### Tipo A Record
- **Host**: `@`
- **Points to**: `157.230.165.143`
- **TTL**: 600 segundos

### Tipo A Record (www)
- **Host**: `www`
- **Points to**: `157.230.165.143`
- **TTL**: 600 segundos

## 📦 Estrutura do Deploy

```
GitHub Push → GitHub Actions
    ↓
Build Docker Image
    ↓
Push to ghcr.io
    ↓
SSH to VPS
    ↓
Docker Swarm Pull & Deploy
    ↓
Traefik Routes Traffic
    ↓
🎉 Site Live!
```

## 🔍 Monitoramento

### Ver status dos serviços
```bash
docker service ls
docker service ps mood_mood-web
```

### Ver logs
```bash
docker service logs mood_mood-web -f
```

### Ver status do Traefik
Acesse: https://portainer.157.230.165.143.sslip.io

## 🛠️ Troubleshooting

### Erro: "network network_public not found"
```bash
docker network create --driver=overlay network_public
```

### Erro: "failed to authenticate"
Certifique-se que adicionou `--with-registry-auth` no comando de deploy (já está incluído).

### Deploy não atualiza
```bash
# Forçar atualização
docker service update --force mood_mood-web
```

### SSL não funciona
Aguarde alguns minutos. O Let's Encrypt pode levar até 5 minutos para emitir o certificado.

Verifique os logs do Traefik:
```bash
docker service logs traefik_traefik | grep -i acme
```

## 🔄 Rollback (se algo der errado)

```bash
# Ver histórico de deploys
docker service ps mood_mood-web --no-trunc

# Fazer rollback para versão anterior
docker service rollback mood_mood-web
```

## 📝 Próximos Passos

Depois que tudo estiver funcionando com Mood Motel, você pode criar stacks similares para os outros motéis:

- `docker-compose.yes.yml` → yesmotel.com
- `docker-compose.calle8.yml` → calle8motel.com
- `docker-compose.scape.yml` → scapemotel.com
- `docker-compose.nexx.yml` → nexxmotel.com
- `docker-compose.aqua.yml` → aquamotel.com

E workflows correspondentes no GitHub Actions.

## 🎉 Resultado Final

Após configurar tudo:

1. ✅ Push to main → deploy automático
2. ✅ Zero downtime deployments (rolling update)
3. ✅ SSL automático via Let's Encrypt
4. ✅ www.moodmotel.com → redireciona para moodmotel.com
5. ✅ Load balancing com 2 réplicas
6. ✅ Auto-restart em caso de falha

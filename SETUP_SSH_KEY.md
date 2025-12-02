# 🔑 Como Criar e Configurar a Chave SSH

## Opção 1: Criar Nova Chave SSH no Servidor (RECOMENDADO)

Execute estes comandos no seu servidor VPS (via Termius):

```bash
# Criar chave SSH (pressione Enter em todas as perguntas)
ssh-keygen -t rsa -b 4096 -C "github-actions@moodmotel.com"

# Quando perguntar "Enter file in which to save the key", pressione Enter
# Quando perguntar "Enter passphrase", pressione Enter (sem senha)
# Quando perguntar "Enter same passphrase again", pressione Enter

# Adicionar a chave ao SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa

# Adicionar a chave pública ao authorized_keys
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys

# Ajustar permissões
chmod 600 ~/.ssh/authorized_keys
chmod 700 ~/.ssh

# Agora mostrar a chave PRIVADA para copiar
cat ~/.ssh/id_rsa
```

**COPIE TODO O CONTEÚDO** que aparecer (incluindo as linhas `-----BEGIN` e `-----END`) e adicione como `SSH_PRIVATE_KEY` no GitHub Secrets.

---

## Opção 2: Usar a Chave SSH do Termius

Se você já tem uma chave SSH configurada no Termius, você pode usá-la:

### No Termius:

1. Abra o **Termius**
2. Vá em **Keychain** (ícone de chave no menu lateral)
3. Encontre a chave que você usa para conectar no servidor
4. Clique nela
5. Copie a **PRIVATE KEY** (chave privada)
6. Cole no GitHub Secrets como `SSH_PRIVATE_KEY`

---

## Opção 3: Usar Senha ao invés de Chave SSH

Se preferir usar senha (menos seguro, mas mais simples), modifique o workflow do GitHub Actions:

**Arquivo**: `.github/workflows/deploy-mood.yml`

Encontre esta parte:
```yaml
- name: Deploy to Docker Swarm via SSH
  uses: appleboy/ssh-action@v1.0.0
  env:
    GITHUB_USERNAME: ${{ github.repository_owner }}
  with:
    host: ${{ secrets.SSH_HOST }}
    username: ${{ secrets.SSH_USER }}
    key: ${{ secrets.SSH_PRIVATE_KEY }}  # <-- ESTA LINHA
    port: ${{ secrets.SSH_PORT || 22 }}
```

E troque por:
```yaml
- name: Deploy to Docker Swarm via SSH
  uses: appleboy/ssh-action@v1.0.0
  env:
    GITHUB_USERNAME: ${{ github.repository_owner }}
  with:
    host: ${{ secrets.SSH_HOST }}
    username: ${{ secrets.SSH_USER }}
    password: ${{ secrets.SSH_PASSWORD }}  # <-- MUDOU AQUI
    port: ${{ secrets.SSH_PORT || 22 }}
```

E adicione um novo Secret no GitHub:
- **Name**: `SSH_PASSWORD`
- **Secret**: A senha do seu usuário root

---

## ⚠️ IMPORTANTE: Verificar se o SSH está funcionando

Antes de configurar o GitHub Actions, teste se você consegue conectar via SSH:

```bash
# Do seu computador local, tente conectar:
ssh root@157.230.165.143

# Deve conectar sem pedir senha (se estiver usando chave)
# ou pedir senha (se estiver usando senha)
```

Se conectar com sucesso, está tudo certo!

---

## 🎯 Qual Opção Escolher?

- **Opção 1** (Criar nova chave) - ✅ MAIS SEGURO e RECOMENDADO
- **Opção 2** (Usar chave do Termius) - ✅ Rápido se já tiver configurado
- **Opção 3** (Usar senha) - ⚠️ Menos seguro, mas mais simples

---

## 📝 Resumo dos Secrets Necessários

### Se usar CHAVE SSH (Opções 1 ou 2):
- `SSH_HOST` → `157.230.165.143`
- `SSH_USER` → `root`
- `SSH_PORT` → `22`
- `SSH_PRIVATE_KEY` → Conteúdo completo da chave privada

### Se usar SENHA (Opção 3):
- `SSH_HOST` → `157.230.165.143`
- `SSH_USER` → `root`
- `SSH_PORT` → `22`
- `SSH_PASSWORD` → Sua senha do servidor

---

## 🆘 Problemas Comuns

### "Permission denied (publickey)"
A chave privada não está correta ou não foi adicionada ao `authorized_keys`.

**Solução**: Siga a Opção 1 novamente.

### "Host key verification failed"
Primeira vez conectando neste servidor.

**Solução**: Conecte manualmente uma vez via SSH do seu computador local.

### Nada aparece quando executo `cat ~/.ssh/id_rsa`
A chave não existe.

**Solução**: Execute a Opção 1 para criar a chave.
